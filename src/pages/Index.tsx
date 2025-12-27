import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  Cloud,
  Shield,
  Headphones,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Rozwiązania chmurowe",
    description:
      "Bezpieczna i skalowalna infrastruktura chmurowa dostosowana do Twoich potrzeb.",
  },
  {
    icon: Shield,
    title: "Cyberbezpieczeństwo",
    description:
      "Chroń swoją firmę dzięki rozwiązaniom bezpieczeństwa klasy enterprise.",
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    description: "Całodobowe wsparcie techniczne, gdy najbardziej go potrzebujesz.",
  },
  {
    icon: Zap,
    title: "Szybkie wdrożenie",
    description: "Błyskawiczna implementacja z minimalnym wpływem na Twoją działalność.",
  },
];

const stats = [
  { value: "500+", label: "Obsłużonych klientów" },
  { value: "99.9%", label: "Gwarantowana dostępność" },
  { value: "24/7", label: "Dostępne wsparcie" },
  { value: "15+", label: "Lat doświadczenia" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Przekształć swój biznes dzięki{" "}
              <span className="text-gradient">profesjonalnym rozwiązaniom IT</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Dostarczamy nowoczesne rozwiązania technologiczne, które napędzają rozwój,
              zwiększają bezpieczeństwo i usprawniają działanie firm każdej wielkości.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Rozpocznij <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">Poznaj usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego warto nas wybrać?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Łączymy doświadczenie branżowe z innowacyjną technologią, aby dostarczać
              rozwiązania przewyższające oczekiwania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card gradient-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gotowy, by podnieść poziom swojej infrastruktury IT?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o tym, jak możemy pomóc Twojej firmie rozwijać się
              dzięki naszym kompleksowym rozwiązaniom IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Umów konsultację</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/prices">Zobacz cennik</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;