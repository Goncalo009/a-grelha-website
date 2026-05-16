import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.3),transparent)]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            O verdadeiro sabor da{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              grelha tradicional
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Desde 1985, garantimos produtos frescos e de qualidade, sempre com o mesmo carinho e dedicação.
            Venha experimentar o melhor da carne grelhada e dos petiscos de sempre.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base">
              Ver Menu Completo
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              Reservar Mesa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}