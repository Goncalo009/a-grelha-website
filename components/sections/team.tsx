import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Carlos Silva",
    role: "Chef e Fundador",
    bio: "Com mais de 20 anos de experiência em grelhas, o Carlos é a alma da cozinha. Aprendeu o ofício com o seu pai e nunca deixou de inovar sem perder a essência.",
  },
  {
    name: "Maria Santos",
    role: "Gerente de Operations",
    bio: "A Maria garante que tudo funcione como um relógio. Com uma energia contagiante, é o coração do atendimento e coordena a equipa com mão de ferro… mas de ferro doce.",
  },
  {
    name: "João Costa",
    role: "Mestre da Grelha",
    bio: "O João tem o dom de transformar carne em arte. Conhece cada corte como ninguém e sabe exatamente o momento certo para virar cada peça na grelha.",
  },
  {
    name: "Ana Rodrigues",
    role: "Responsável de Takeaway e Eventos",
    bio: "A Ana assegura que cada encomenda chegue perfeita e que cada evento seja memorável. Detalhista e organizada, é a pessoa de confiança para qualquer ocasião.",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full bg-muted flex items-center justify-center">
        {/* Placeholder for photo */}
        <div className="text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-muted-foreground/20 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c0 1.11.52 2.13 1.36 2.85l3.6 3.6 3-3" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">Adicionar foto</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <p className="text-sm text-primary font-medium">{member.role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
}

export function Team() {
  return (
    <section className="container py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Quem Somos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça as pessoas que tornam a Grelha possível
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
