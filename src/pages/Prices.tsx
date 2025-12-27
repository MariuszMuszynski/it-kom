import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Idealny dla małych firm, które dopiero zaczynają",
    price: "1999 zł",
    period: "/miesiąc",
    features: [
      "Do 10 użytkowników",
      "Podstawowy hosting w chmurze",
      "Wsparcie e-mail",
      "Miesięczne kopie zapasowe",
      "Podstawowy monitoring bezpieczeństwa",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Idealny dla rozwijających się firm z rosnącymi potrzebami IT",
    price: "3999 zł",
    period: "/miesiąc",
    features: [
      "Do 50 użytkowników",
      "Zaawansowana infrastruktura chmurowa",
      "Wsparcie telefoniczne i e-mail 24/7",
      "Codzienne kopie zapasowe",
      "Zaawansowana ochrona przed zagrożeniami",
      "Godziny konsultacji IT",
      "Priorytetowa odpowiedź",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Kompleksowe rozwiązanie dla dużych organizacji",
    price: "Indywidualnie",
    period: "",
    features: [
      "Nieograniczona liczba użytkowników",
      "Dedykowana infrastruktura",
      "Dedykowany opiekun klienta",
      "Kopie zapasowe w czasie rzeczywistym",
      "Pakiet bezpieczeństwa enterprise",
      "Nieograniczone konsultacje",
      "Indywidualne SLA",
      "Wsparcie na miejscu dostępne",
    ],
    popular: false,
  },
];

const additionalServices = [
  { service: "Migracja do chmury", price: "Od 10 000 zł" },
  { service: "Audyt bezpieczeństwa", price: "Od 6 000 zł" },
  { service: "Rozwój oprogramowania", price: "600 zł/godz." },
  { service: "Wsparcie awaryjne", price: "1000 zł/godz." },
];

const Prices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Prosty, przejrzysty <span className="text-gradient">Cennik</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Wybierz plan dopasowany do potrzeb Twojej firmy. Wszystkie plany
              zawierają nasze podstawowe funkcje zarządzania IT.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 animate-fade-in ${
                  plan.popular
                    ? "bg-primary text-primary-foreground border-primary shadow-hover scale-105"
                    : "bg-card border-border shadow-soft hover:shadow-hover"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Najpopularniejszy
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular
                            ? "text-secondary"
                            : "text-secondary"
                        }`}
                      />
                      <span
                        className={
                          plan.popular
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "secondary" : "hero"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Rozpocznij</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Dodatkowe usługi
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Potrzebujesz czegoś konkretnego? Oferujemy elastyczne usługi dodatkowe.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((item, index) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium text-foreground">
                    {item.service}
                  </span>
                  <span className="text-primary font-semibold">{item.price}</span>
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
              Potrzebujesz indywidualnego rozwiązania?
            </h2>
            <p className="text-muted-foreground mb-8">
              Skontaktuj się z nami, aby omówić swoje wymagania i otrzymać
              spersonalizowaną ofertę.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Skontaktuj się ze sprzedażą <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;