import Layout from "@/components/Layout";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientacja na klienta",
    description:
      "Stawiamy potrzeby Twojej firmy na pierwszym miejscu, dostarczając rozwiązania przynoszące realne rezultaty.",
  },
  {
    icon: Award,
    title: "Doskonałość",
    description:
      "Utrzymujemy najwyższe standardy w każdym projekcie, który realizujemy.",
  },
  {
    icon: TrendingUp,
    title: "Innowacyjność",
    description:
      "Wyprzedzamy trendy technologiczne, aby dać Ci przewagę konkurencyjną.",
  },
  {
    icon: Users,
    title: "Partnerstwo",
    description:
      "Budujemy trwałe relacje oparte na zaufaniu i wzajemnym sukcesie.",
  },
];

const team = [
  {
    name: "Michał Kowalski",
    role: "Dyrektor Generalny i Założyciel",
    bio: "Ponad 20 lat w kierownictwie IT",
  },
  {
    name: "Anna Nowak",
    role: "Dyrektor ds. Technologii",
    bio: "Ekspert architektury chmurowej",
  },
  {
    name: "Dawid Wiśniewski",
    role: "Szef Bezpieczeństwa",
    bio: "Specjalista ds. cyberbezpieczeństwa",
  },
  {
    name: "Emilia Jankowska",
    role: "Dyrektor ds. Sukcesu Klienta",
    bio: "Lider doświadczenia klienta",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              O firmie <span className="text-gradient">it-kom</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Jesteśmy zespołem pasjonatów technologii, którzy pomagają
              firmom odnosić sukces dzięki innowacyjnym rozwiązaniom IT.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nasza historia
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Założona w 2008 roku, firma it-kom rozpoczęła działalność z prostą misją: 
                  udostępnić rozwiązania IT klasy enterprise firmom każdej wielkości.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Przez lata rozwinęliśmy się z małej firmy konsultingowej do 
                  pełnoprawnego dostawcy rozwiązań IT, obsługując ponad 500 klientów
                  z różnych branż.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dziś kontynuujemy innowacje i adaptację, zapewniając naszym klientom
                  stały dostęp do najnowszych rozwiązań technologicznych.
                </p>
              </div>
              <div
                className="bg-muted rounded-2xl p-8 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      15+
                    </div>
                    <div className="text-muted-foreground">
                      Lat doświadczenia
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      500+
                    </div>
                    <div className="text-muted-foreground">Obsłużonych klientów</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      50+
                    </div>
                    <div className="text-muted-foreground">Członków zespołu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nasze wartości
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Te podstawowe zasady kierują wszystkim, co robimy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zespół kierowniczy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Poznaj ekspertów, którzy napędzają naszą misję.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;