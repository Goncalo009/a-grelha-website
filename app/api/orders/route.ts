import { NextRequest, NextResponse } from "next/server";

// In-memory store (resets on server restart)
const orders: Array<{
  id: string;
  name: string;
  phone: string;
  email: string;
  dishes: string[];
  notes: string;
  total: number;
  createdAt: Date;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, dishes, notes, total } = body;

    if (!name || !phone || !email || !dishes || dishes.length === 0) {
      return NextResponse.json({ error: "Campos obrigatórios em falta." }, { status: 400 });
    }

    const order = {
      id: `ord-${Date.now()}`,
      name,
      phone,
      email,
      dishes,
      notes: notes || "",
      total: total || 0,
      createdAt: new Date(),
    };

    orders.push(order);
    console.log("[Orders] Nova encomenda:", order);

    // TODO: Integrar com PocketBase real
    // await pb.collection('orders').create(order);

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error: any) {
    console.error("[Orders] Erro:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}

// For testing: GET returns all orders (dev only)
export async function GET() {
  return NextResponse.json({ orders });
}
