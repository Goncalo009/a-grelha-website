"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { id: "frango", name: "Frango no Churrasco", price: 18 },
  { id: "costela", name: "Costela de Porco", price: 22 },
  { id: "vazia", name: "Bife de Vazia", price: 16 },
  { id: "sardinhas", name: "Sardinhas Assadas", price: 12 },
  { id: "bola-berlim", name: "Bola de Berlim", price: 2.5 },
];

export function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: "success" | "error"; text: string} | null>(null);

  const toggleDish = (dishId: string) => {
    setSelectedDishes(prev =>
      prev.includes(dishId) ? prev.filter(id => id !== dishId) : [...prev, dishId]
    );
  };

  const total = selectedDishes.reduce((sum, id) => {
    const item = menuItems.find(d => d.id === id);
    return sum + (item?.price || 0);
  }, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          dishes: selectedDishes,
          notes,
          total,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Encomenda recebida! Entraremos em contacto brevemente." });
        setName(""); setPhone(""); setEmail(""); setSelectedDishes([]); setNotes("");
      } else {
        setMessage({ type: "error", text: data.error || "Erro ao processar encomenda." });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Detalhes da Encomenda</CardTitle>
        <CardDescription>Preencha o formulário e selecione os pratos</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <Input value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <Input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pratos</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {menuItems.map(dish => (
                <button
                  key={dish.id}
                  type="button"
                  className={`p-3 border rounded text-left ${selectedDishes.includes(dish.id) ? "bg-primary text-primary-foreground" : ""}`}
                  onClick={() => toggleDish(dish.id)}
                >
                  {dish.name} — €{dish.price.toFixed(2)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Observações</label>
            <Textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Ex: Horário de entrega preferido, instruções..." />
          </div>
          <div className="text-xl font-semibold">
            Total: €{total.toFixed(2)}
          </div>
          {message && (
            <div className={`p-3 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {message.text}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading || selectedDishes.length === 0}>
            {loading ? "A enviar..." : "Enviar Encomenda"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
