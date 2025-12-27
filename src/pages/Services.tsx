import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Shield,
  Server,
  Headphones,
  Code,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Rozwiązania chmurowe",
    description:
      "Migruj do chmury z pewnością. Projektujemy, wdrażamy i zarządzamy infrastrukturą chmurową, która skaluje się wraz z Twoim biznesem.",
    features: [
      "Strategia migracji do chmury",
      "AWS, Azure i Google Cloud",
      "Rozwiązania chmury hybrydowej",
      "Optymalizacja kosztów",
    ],
  },
  {
    icon: Shield,
    title: "Cyberbezpieczeństwo",
    description:
      "Chroń swoją firmę przed zagrożeniami dzięki naszym kompleksowym rozwiązaniom bezpieczeństwa i całodobowemu monitoringowi.",
    features: [
      "Wykrywanie i reagowanie na zagrożenia",
      "Audyty bezpieczeństwa",
      "Zarządzanie zgodnością",
      "Szkolenia pracowników",
    ],
  },
  {
    icon: Server,
    title: "Zarządzane usługi IT",
    description:
      "Skup się na swojej działalności, a my zajmiemy się Twoją infrastrukturą IT z proaktywnym zarządzaniem i wsparciem.",
    features: [
      "Monitoring 24/7",
      "Proaktywna konserwacja",
      "Wsparcie help desk",
      "Zarządzanie zasobami",
    ],
  },
  {
    icon: Headphones,
    title: "Konsulting IT",
    description:
      "Strategiczne doradztwo technologiczne, aby dostosować inwestycje IT do celów biznesowych.",
    features: [
      "Mapy drogowe technologii",
      "Transformacja cyfrowa",
      "Optymalizacja procesów",
      "Zarządzanie dostawcami",
    ],
  },
  {
    icon: Code,
    title: "Rozwój oprogramowania",
    description:
      "Niestandardowe rozwiązania programistyczne zaprojektowane do usprawnienia operacji i napędzania innowacji.",
    features: [
      "Aplikacje webowe",
      "Aplikacje mobilne",
      "Integracje API",
      "Modernizacja systemów",
    ],
  },
  {
    icon: Database,
    title: "Usługi danych",
    description:
      "Odblokuj wartość swoich danych dzięki naszym rozwiązaniom analitycznym i zarządzaniu bazami danych.",
    features: [
      "Analityka danych",
      "Zarządzanie bazami danych",
      "Backup i odzyskiwanie",
      "Wizualizacja danych",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Nasze <span className="text-gradient">Usługi</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Kompleksowe rozwiązania IT dostosowane do potrzeb Twojej firmy
              i napędzające transformację cyfrową.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jak pracujemy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nasz sprawdzony proces zapewnia skuteczną realizację każdego projektu.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Odkrycie", desc: "Poznanie Twoich potrzeb" },
                { step: "02", title: "Planowanie", desc: "Projektowanie rozwiązania" },
                { step: "03", title: "Wdrożenie", desc: "Budowa i uruchomienie" },
                { step: "04", title: "Wsparcie", desc: "Ciągła optymalizacja" },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gotowy, aby zacząć?
            </h2>
            <p className="text-muted-foreground mb-8">
              Porozmawiajmy o tym, jak nasze usługi mogą pomóc w transformacji Twojej firmy.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Skontaktuj się <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;