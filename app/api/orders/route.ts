import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Encomendas digitais ainda não estão ligadas ao balcão. Use o formulário para preparar o resumo e confirme por telefone.",
    },
    { status: 501 }
  );
}

export async function GET() {
  return NextResponse.json({ error: "Não disponível." }, { status: 404 });
}
