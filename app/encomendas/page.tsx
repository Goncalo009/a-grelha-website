import { Metadata } from "next";
import { OrderForm } from "@/components/forms/order-form";

export const metadata: Metadata = {
  title: "Encomendas | A Grelha — Churrasqueira Porto Alto",
  description: "Faça a sua encomenda online. Escolha os seus pratos favoritos e receba no conforto de casa.",
};

export default function EncomendasPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Faça a sua Encomenda</h1>
      <OrderForm />
    </div>
  );
}
