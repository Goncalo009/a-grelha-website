"use client";

import { useMemo, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { Check, Clock3, Flame, Heart, Minus, Play, Plus, ShoppingBag, Users, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductUnit = "kg" | "unit";

export type ProductDetailDrawerMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  imagePosition?: string;
};

export type ProductDetailPortionOption = {
  label: string;
  price: string;
  priceValue?: number;
  detail?: string;
  priceMultiplier?: number;
  cartQuantityMultiplier?: number;
};

export type ProductDetailDrawerProduct = {
  name: string;
  description: string;
  detail?: string;
  price: string;
  priceValue?: number;
  image: string;
  alt: string;
  unit?: ProductUnit;
  imagePosition?: string;
  categoryId?: string;
  badges?: string[];
  media?: ProductDetailDrawerMedia[];
  portionOptions?: ProductDetailPortionOption[];
  flavourNote?: string;
  trustChips?: string[];
};

export type ProductDetailCartLine = {
  id: string;
  name: string;
  detail: string;
  price: string;
  priceAmount?: number;
  quantity: number;
  image: string;
  alt: string;
  imagePosition?: string;
};

type ProductDetailDrawerProps = {
  product: ProductDetailDrawerProduct;
  titleId: string;
  onClose: () => void;
  onAddToCart: (line: ProductDetailCartLine) => void;
};

function formatEuro(value: number) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

function mediaForProduct(product: ProductDetailDrawerProduct): ProductDetailDrawerMedia[] {
  if (product.media?.length) return product.media;

  const supportingMedia: ProductDetailDrawerMedia[] = [
    {
      type: "image",
      src: "/stitch/home/whole-bird.jpg",
      alt: "Frango assado no carvão",
      imagePosition: "object-[52%_52%]",
    },
    {
      type: "image",
      src: "/stitch/home/hero.jpg",
      alt: "Carne grelhada na brasa",
      imagePosition: "object-[50%_58%]",
    },
    {
      type: "video",
      src: "/stitch/home/hero-loop.mp4",
      poster: "/stitch/home/fire-wings.jpg",
      thumbnailSrc: "/stitch/home/fire-wings.jpg",
      alt: "Preparação na brasa",
      imagePosition: "object-[50%_55%]",
    },
  ];

  const primary: ProductDetailDrawerMedia = {
    type: "image",
    src: product.image,
    alt: product.alt,
    imagePosition: product.imagePosition,
  };

  const uniqueSupporting = supportingMedia.filter((item) => item.src !== product.image && item.poster !== product.image);
  return [primary, ...uniqueSupporting].slice(0, 4);
}

function portionOptionsForProduct(product: ProductDetailDrawerProduct): ProductDetailPortionOption[] {
  if (product.portionOptions?.length) return product.portionOptions;

  const unit = product.unit ?? "kg";
  const isCombo = product.categoryId === "combos" || product.name.toLowerCase().includes("combo");

  if (unit === "unit") {
    const labels = isCombo ? ["Para 1 pessoa", "Para 2 pessoas", "Para 3 pessoas"] : ["1 unidade", "2 unidades", "3 unidades"];

    return labels.map((label, index) => {
      const multiplier = index + 1;
      const priceValue = product.priceValue !== undefined ? product.priceValue * multiplier : undefined;

      return {
        label,
        detail: isCombo ? `${multiplier} dose${multiplier > 1 ? "s" : ""}` : undefined,
        price: priceValue !== undefined ? formatEuro(priceValue) : product.price,
        priceValue,
        priceMultiplier: multiplier,
        cartQuantityMultiplier: multiplier,
      };
    });
  }

  return [
    { label: "1 pessoa", detail: "500 g aprox.", priceMultiplier: 0.5, cartQuantityMultiplier: 1 },
    { label: "2 pessoas", detail: "1 kg aprox.", priceMultiplier: 1, cartQuantityMultiplier: 1 },
    { label: "3 pessoas", detail: "1,5 kg aprox.", priceMultiplier: 1.5, cartQuantityMultiplier: 1 },
  ].map((option) => {
    const priceValue = product.priceValue !== undefined ? product.priceValue * option.priceMultiplier : undefined;

    return {
      ...option,
      price: priceValue !== undefined ? formatEuro(priceValue) : product.price,
      priceValue,
      detail: option.detail,
    };
  });
}

function descriptionForProduct(product: ProductDetailDrawerProduct) {
  if (product.description && !product.description.includes("Preço por kg")) return product.description;
  return "Uma seleção generosa de brasa viva, carne suculenta e acompanhamentos preparados para levantar quentes e cheios de sabor.";
}

export function ProductDetailDrawer({ product, titleId, onClose, onAddToCart }: ProductDetailDrawerProps) {
  const media = useMemo(() => mediaForProduct(product), [product]);
  const initialMediaIndex = product.media?.findIndex((item) => item.type === "video") ?? -1;
  const [activeMedia, setActiveMedia] = useState(initialMediaIndex >= 0 ? initialMediaIndex : 0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [added, setAdded] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragLastY = useRef(0);
  const dragStartAt = useRef(0);
  const dragActive = useRef(false);
  const carouselStartX = useRef(0);
  const carouselStartY = useRef(0);
  const carouselLastX = useRef(0);
  const carouselLastY = useRef(0);
  const carouselStartedAt = useRef(0);
  const carouselActive = useRef(false);
  const carouselIntent = useRef<"horizontal" | "vertical" | null>(null);

  const portions = useMemo(() => portionOptionsForProduct(product), [product]);
  const selectedPortion = portions[selectedOption] ?? portions[0];
  const active = media[activeMedia] ?? media[0];
  const totalAmount = selectedPortion?.priceValue !== undefined ? selectedPortion.priceValue * quantity : undefined;
  const totalPrice = totalAmount !== undefined ? formatEuro(totalAmount) : selectedPortion?.price ?? product.price;
  const displayDescription = descriptionForProduct(product);
  const trustChips = product.trustChips ?? ["Perfeito para 2–3 pessoas", "Mais pedido ao jantar", "Levantamento rápido"];
  const chipIcons = [Users, Flame, Clock3];
  const lineDetail = selectedPortion ? [selectedPortion.label, selectedPortion.detail].filter(Boolean).join(" · ") : product.detail ?? "Dose";

  const addToCart = () => {
    onAddToCart({
      id: `${product.name}-${lineDetail}`,
      name: product.name,
      detail: lineDetail,
      price: totalPrice,
      priceAmount: totalAmount,
      quantity: (selectedPortion?.cartQuantityMultiplier ?? 1) * quantity,
      image: product.image,
      alt: product.alt,
      imagePosition: product.imagePosition,
    });
    setAdded(true);
  };

  const beginDismissDrag = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStartY.current = event.clientY;
    dragLastY.current = event.clientY;
    dragStartAt.current = typeof performance !== "undefined" ? performance.now() : Date.now();
    dragActive.current = true;
    setIsDragging(true);
    setDragY(0);
    try {
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // Pointer capture can fail in synthetic/tested events; the drag still works for real touch pointers.
    }
  };

  const updateDismissDrag = (event: PointerEvent<HTMLElement>) => {
    if (!dragActive.current) return;

    const nextDragY = Math.max(0, event.clientY - dragStartY.current);
    dragLastY.current = event.clientY;
    setDragY(Math.min(nextDragY, 260));

    if (nextDragY > 4) event.preventDefault();
  };

  const finishDismissDrag = (event: PointerEvent<HTMLElement>) => {
    if (!dragActive.current) return;

    const deltaY = Math.max(0, dragLastY.current - dragStartY.current);
    const elapsed = Math.max(1, (typeof performance !== "undefined" ? performance.now() : Date.now()) - dragStartAt.current);
    const velocity = deltaY / elapsed;

    dragActive.current = false;
    setIsDragging(false);
    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // See setPointerCapture guard above.
    }

    if (deltaY > 92 || (deltaY > 48 && velocity > 0.55)) {
      onClose();
      return;
    }

    setDragY(0);
  };

  const cancelDismissDrag = (event: PointerEvent<HTMLElement>) => {
    if (!dragActive.current) return;

    dragActive.current = false;
    setIsDragging(false);
    setDragY(0);
    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // See setPointerCapture guard above.
    }
  };

  const dragToCloseProps = {
    onPointerDown: beginDismissDrag,
    onPointerMove: updateDismissDrag,
    onPointerUp: finishDismissDrag,
    onPointerCancel: cancelDismissDrag,
  };

  const moveMedia = (direction: 1 | -1) => {
    setActiveMedia((index) => {
      if (media.length < 2) return index;
      return (index + direction + media.length) % media.length;
    });
    setAdded(false);
  };

  const beginHeroGesture = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    carouselStartX.current = event.clientX;
    carouselStartY.current = event.clientY;
    carouselLastX.current = event.clientX;
    carouselLastY.current = event.clientY;
    carouselStartedAt.current = typeof performance !== "undefined" ? performance.now() : Date.now();
    carouselIntent.current = null;
    carouselActive.current = true;
    dragActive.current = false;
    setDragY(0);

    try {
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // Pointer capture can fail in synthetic/tested events; real touch pointers continue to work.
    }
  };

  const updateHeroGesture = (event: PointerEvent<HTMLElement>) => {
    if (!carouselActive.current) return;

    const deltaX = event.clientX - carouselStartX.current;
    const deltaY = event.clientY - carouselStartY.current;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    carouselLastX.current = event.clientX;
    carouselLastY.current = event.clientY;

    if (!carouselIntent.current && (absX > 8 || absY > 8)) {
      carouselIntent.current = absX > absY ? "horizontal" : "vertical";
      if (carouselIntent.current === "vertical") {
        dragStartY.current = carouselStartY.current;
        dragLastY.current = event.clientY;
        dragStartAt.current = carouselStartedAt.current;
        dragActive.current = true;
        setIsDragging(true);
      }
    }

    if (carouselIntent.current === "vertical") {
      const nextDragY = Math.max(0, event.clientY - carouselStartY.current);
      dragLastY.current = event.clientY;
      setDragY(Math.min(nextDragY, 260));
      if (nextDragY > 4) event.preventDefault();
    }
  };

  const finishHeroGesture = (event: PointerEvent<HTMLElement>) => {
    if (!carouselActive.current) return;

    const deltaX = carouselLastX.current - carouselStartX.current;
    const deltaY = carouselLastY.current - carouselStartY.current;
    const elapsed = Math.max(1, (typeof performance !== "undefined" ? performance.now() : Date.now()) - carouselStartedAt.current);
    const horizontalVelocity = Math.abs(deltaX) / elapsed;

    carouselActive.current = false;

    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // See setPointerCapture guard above.
    }

    if (carouselIntent.current === "horizontal" && media.length > 1 && (Math.abs(deltaX) > 44 || horizontalVelocity > 0.45)) {
      moveMedia(deltaX < 0 ? 1 : -1);
      carouselIntent.current = null;
      return;
    }

    if (carouselIntent.current === "vertical") {
      finishDismissDrag(event);
      carouselIntent.current = null;
      return;
    }

    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 8 && media.length > 1) {
      moveMedia(1);
    }

    carouselIntent.current = null;
    setDragY(0);
    setIsDragging(false);
  };

  const cancelHeroGesture = (event: PointerEvent<HTMLElement>) => {
    carouselActive.current = false;
    carouselIntent.current = null;
    cancelDismissDrag(event);
  };

  const heroGestureProps = {
    onPointerDown: beginHeroGesture,
    onPointerMove: updateHeroGesture,
    onPointerUp: finishHeroGesture,
    onPointerCancel: cancelHeroGesture,
  };

  return (
    <div
      className="flex min-h-0 flex-1 flex-col bg-[#fbfaf7] text-[#1c1c1c] will-change-transform"
      style={{
        transform: dragY > 0 ? `translate3d(0, ${dragY}px, 0)` : undefined,
        transition: isDragging ? "none" : "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 overflow-hidden px-4 pb-3 pt-[calc(env(safe-area-inset-top)+0.35rem)] sm:px-5">
        <div
          data-product-drawer-drag-handle="true"
          className="mx-auto h-5 w-16 cursor-grab touch-none active:cursor-grabbing"
          {...dragToCloseProps}
        >
          <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[#d8d2ca]" aria-hidden="true" />
        </div>

        <div className="relative">
          <div
            data-product-drawer-drag-zone="hero-media"
            className="relative h-[clamp(124px,22svh,186px)] cursor-grab touch-none overflow-hidden rounded-[20px] bg-[#211b17] shadow-[0_14px_34px_rgba(54,35,23,0.18)] ring-1 ring-black/5 active:cursor-grabbing"
            {...heroGestureProps}
          >
            {active?.type === "video" ? (
              <video
                key={active.src}
                className="h-full w-full object-cover"
                poster={active.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={active.alt}
              >
                <source src={active.src} type={active.src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
              </video>
            ) : active ? (
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority
                sizes="430px"
                className={cn("object-cover", active.imagePosition ?? product.imagePosition)}
              />
            ) : null}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/34 via-black/4 to-transparent" />
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/84 px-2 py-1 shadow-[0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur">
              {media.map((item, index) => (
                <span
                  key={`${item.src}-${index}`}
                  className={cn("h-1.5 rounded-full transition-all", index === activeMedia ? "w-4 bg-[#c6452c]" : "w-1.5 bg-[#d8d2ca]")}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Fechar produto"
            onClick={onClose}
            className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbfaf7]/92 text-[#1c1c1c] shadow-[0_10px_24px_rgba(54,35,23,0.18)] backdrop-blur transition hover:bg-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c]"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2" aria-label="Escolher media do produto">
          {media.slice(0, 3).map((item, index) => {
            const thumbSrc = item.thumbnailSrc ?? item.poster ?? item.src;
            const isActive = index === activeMedia;

            return (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => {
                  setActiveMedia(index);
                  setAdded(false);
                }}
                aria-label={`Mostrar ${item.thumbnailAlt ?? item.alt}`}
                className={cn(
                  "relative h-[clamp(48px,8.4svh,64px)] overflow-hidden rounded-[12px] bg-[#e9e2dc] transition active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c]",
                  isActive ? "ring-2 ring-[#c6452c] ring-offset-2 ring-offset-[#fbfaf7]" : "ring-1 ring-black/5"
                )}
              >
                <Image
                  src={thumbSrc}
                  alt={item.thumbnailAlt ?? item.alt}
                  fill
                  sizes="130px"
                  className={cn("object-cover", item.imagePosition ?? product.imagePosition)}
                />
                {item.type === "video" ? (
                  <span className="absolute inset-0 grid place-items-center bg-black/24 text-white">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-black/24 shadow-[0_8px_18px_rgba(0,0,0,0.24)] ring-1 ring-white/50 backdrop-blur">
                      <Play aria-hidden="true" className="ml-0.5 h-3 w-3 fill-white" strokeWidth={2.2} />
                    </span>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <section className="min-h-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 id={titleId} className="font-headline text-[clamp(1.55rem,7vw,1.95rem)] font-bold leading-[0.9] tracking-[-0.055em] text-[#171514]">
                {product.name}
              </h2>
              <p className="mt-1.5 line-clamp-3 max-w-[38ch] text-[0.74rem] font-medium leading-[1.12rem] tracking-[-0.015em] text-[#1c1c1c]/72">
                {displayDescription}
              </p>
              <p className="mt-1.5 text-[0.82rem] font-extrabold uppercase tracking-[0.035em] text-[#c6452c]">
                Desde {product.price}
              </p>
            </div>
            <button
              type="button"
              aria-label={`Guardar ${product.name} nos favoritos`}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff7f1] text-[#c6452c] shadow-[0_8px_18px_rgba(198,69,44,0.10)] ring-1 ring-[#c6452c]/12 transition hover:bg-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c]"
            >
              <Heart aria-hidden="true" size={17} strokeWidth={1.9} />
            </button>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-1.5" aria-label="Notas rápidas">
          {trustChips.slice(0, 3).map((chip, index) => {
            const Icon = chipIcons[index] ?? Zap;
            return (
              <span
                key={chip}
                className="inline-flex min-h-7 min-w-0 items-center justify-center gap-1 rounded-[8px] bg-[#fff3ec] px-1.5 text-center text-[0.52rem] font-bold leading-tight tracking-[-0.02em] text-[#7d3a2d] ring-1 ring-[#c6452c]/10"
              >
                <Icon aria-hidden="true" size={11} strokeWidth={1.9} className="shrink-0 text-[#c6452c]" />
                <span className="truncate">{chip}</span>
              </span>
            );
          })}
        </div>

        <section>
          <h3 className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#171514]">Escolhe a dose</h3>
          <div className="mt-1.5 grid grid-cols-3 gap-2" role="group" aria-label="Escolher dose">
            {portions.slice(0, 3).map((option, index) => (
              <button
                key={`${option.label}-${option.price}`}
                type="button"
                onClick={() => {
                  setSelectedOption(index);
                  setAdded(false);
                }}
                className={cn(
                  "min-h-[68px] rounded-[13px] px-1.5 py-2.5 text-center transition duration-200 active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c]",
                  selectedOption === index
                    ? "bg-[#c6452c] text-white shadow-[0_12px_24px_rgba(198,69,44,0.24)]"
                    : "bg-white text-[#1c1c1c] shadow-[0_7px_16px_rgba(70,43,29,0.05)] ring-1 ring-[#e7ded6] hover:ring-[#c6452c]/32"
                )}
              >
                <span className="block text-[0.62rem] font-extrabold leading-tight tracking-[-0.02em]">{option.label}</span>
                {option.detail ? (
                  <span className={cn("mt-0.5 block text-[0.5rem] font-bold leading-none", selectedOption === index ? "text-white/78" : "text-[#1c1c1c]/48")}>
                    {option.detail}
                  </span>
                ) : null}
                <span className={cn("mt-1.5 block text-[0.68rem] font-black leading-none", selectedOption === index ? "text-white" : "text-[#171514]")}>{option.price}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between gap-4">
          <h3 className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#171514]">Quantidade</h3>
          <div className="grid grid-cols-3 overflow-hidden rounded-[12px] bg-[#eee8e0] text-[#1c1c1c] shadow-[inset_0_0_0_1px_rgba(28,28,28,0.06)]">
            <button
              type="button"
              aria-label="Reduzir quantidade"
              onClick={() => {
                setQuantity((value) => Math.max(1, value - 1));
                setAdded(false);
              }}
              className="flex h-10 w-12 items-center justify-center transition hover:bg-[#e2dbd2] active:bg-[#d8d2ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c6452c]"
            >
              <Minus aria-hidden="true" size={15} />
            </button>
            <span className="flex h-10 w-12 items-center justify-center bg-white text-sm font-extrabold tabular-nums">{quantity}</span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => {
                setQuantity((value) => value + 1);
                setAdded(false);
              }}
              className="flex h-10 w-12 items-center justify-center transition hover:bg-[#e2dbd2] active:bg-[#d8d2ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c6452c]"
            >
              <Plus aria-hidden="true" size={15} />
            </button>
          </div>
        </section>
      </div>

      <div className="shrink-0 border-t border-[#eadfd5] bg-[#fbfaf7]/96 px-4 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2.5 shadow-[0_-16px_34px_rgba(54,35,23,0.10)] backdrop-blur sm:px-5">
        <div className="grid grid-cols-[minmax(76px,0.72fr)_1.55fr] items-center gap-3">
          <div>
            <p className="text-[0.63rem] font-extrabold leading-none text-[#1c1c1c]/62">Total estimado</p>
            <p className="mt-1.5 text-[1rem] font-black leading-none text-[#c6452c] tabular-nums">{totalPrice}</p>
          </div>
          <button
            type="button"
            onClick={addToCart}
            className={cn(
              "inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] px-3 text-[0.68rem] font-extrabold uppercase tracking-[0.07em] text-white shadow-[0_16px_32px_rgba(198,69,44,0.27)] transition duration-200 hover:bg-[#b83d25] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c] motion-reduce:transition-none",
              added ? "bg-[#1c1c1c]" : "bg-[#c6452c]"
            )}
          >
            {added ? <Check aria-hidden="true" size={16} /> : <ShoppingBag aria-hidden="true" size={16} />}
            {added ? "Adicionado" : "Adicionar ao carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
}
