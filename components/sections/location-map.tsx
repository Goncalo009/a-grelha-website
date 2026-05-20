"use client";

import { MapPin, Navigation } from "lucide-react";
import type { StyleSpecification } from "maplibre-gl";
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const openStreetMapRasterStyle: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "osm-raster",
      type: "raster",
      source: "osm",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

const openStreetMapStyles = {
  light: openStreetMapRasterStyle,
  dark: openStreetMapRasterStyle,
};

type LocationMapProps = {
  compact?: boolean;
  className?: string;
};

function StaticMapFallback({ addressLine }: { addressLine: string }) {
  return (
    <a
      href={siteConfig.links.maps}
      target="_blank"
      rel="noreferrer"
      className="absolute inset-0 block overflow-hidden bg-[#e8e1d6] text-brand-black"
      aria-label="Abrir localização da A Grelha no Google Maps"
    >
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center opacity-95 saturate-[0.92]"
        style={{ backgroundImage: "url('https://tile.openstreetmap.org/16/31151/25064.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(70,43,29,0.24))]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_12px_26px_rgba(198,69,44,0.34)] ring-4 ring-white/90">
          <span className="absolute inset-0 rounded-full bg-brand-red/35 animate-ping" aria-hidden="true" />
          <MapPin className="relative z-10 h-7 w-7" strokeWidth={2.1} aria-hidden="true" />
        </span>
      </div>
      <div className="static-map-address-card absolute inset-x-4 bottom-4 rounded-2xl border border-white/65 bg-white/92 p-3 shadow-[0_14px_34px_rgba(70,43,29,0.16)] backdrop-blur">
        <p className="text-sm font-extrabold leading-tight">{siteConfig.name}</p>
        <p className="mt-1 text-xs font-medium leading-snug text-brand-black/70">{addressLine}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-red">
          <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
          Abrir direções
        </span>
      </div>
      <span className="absolute bottom-1 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-brand-black/60">
        © OpenStreetMap contributors
      </span>
    </a>
  );
}

export function LocationMap({ compact = false, className }: LocationMapProps) {
  const addressLine = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.locality}`;

  return (
    <div
      className={cn(compact ? "contact-map contact-map--compact" : "contact-map", className)}
      aria-label="Mapa interativo da localização da A Grelha em Samora Correia"
    >
      <Map
        center={[siteConfig.coordinates.longitude, siteConfig.coordinates.latitude]}
        zoom={compact ? 15.4 : 16.2}
        minZoom={12}
        maxZoom={19}
        scrollZoom={false}
        dragRotate={false}
        pitchWithRotate={false}
        theme="light"
        styles={openStreetMapStyles}
        fallback={<StaticMapFallback addressLine={addressLine} />}
        className="h-full w-full"
      >
        <MapMarker longitude={siteConfig.coordinates.longitude} latitude={siteConfig.coordinates.latitude} anchor="bottom">
          <MarkerContent className="-translate-y-1">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_12px_26px_rgba(198,69,44,0.34)] ring-4 ring-white/90">
              <span className="absolute inset-0 rounded-full bg-brand-red/35 animate-ping" aria-hidden="true" />
              <MapPin className="relative z-10 h-7 w-7" strokeWidth={2.1} aria-hidden="true" />
            </span>
          </MarkerContent>
          <MarkerPopup className="w-[230px] border border-brand-brown/12 bg-white/95 p-4 text-brand-black shadow-[0_18px_45px_rgba(70,43,29,0.18)] backdrop-blur" closeButton>
            <p className="text-sm font-extrabold leading-tight">{siteConfig.name}</p>
            <p className="mt-1 text-xs font-medium leading-snug text-brand-black/70">{addressLine}</p>
            <a
              href={siteConfig.links.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-2 text-xs font-extrabold text-white transition hover:bg-brand-red/90"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Abrir direções
            </a>
          </MarkerPopup>
        </MapMarker>
        <MapControls
          position="top-right"
          showZoom
          showFullscreen={!compact}
          className="[&>div]:border-brand-brown/15 [&>div]:bg-white/92 [&>div]:backdrop-blur"
        />
      </Map>
    </div>
  );
}
