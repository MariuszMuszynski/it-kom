import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started",
    price: "$499",
    period: "/month",
    features: [
      "Up to 10 users",
      "Basic cloud hosting",
      "Email support",
      "Monthly backups",
      "Basic security monitoring",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with expanding IT needs",
    price: "$999",
    period: "/month",
    features: [
      "Up to 50 users",
      "Advanced cloud infrastructure",
      "24/7 phone & email support",
      "Daily backups",
      "Advanced threat protection",
      "IT consulting hours",
      "Priority response",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited users",
      "Dedicated infrastructure",
      "Dedicated account manager",
      "Real-time backups",
      "Enterprise security suite",
      "Unlimited consulting",
      "Custom SLAs",
      "On-site support available",
    ],
    popular: false,
  },
];

const additionalServices = [
  { service: "Cloud Migration", price: "From $2,500" },
  { service: "Security Audit", price: "From $1,500" },
  { service: "Custom Development", price: "$150/hour" },
  { service: "Emergency Support", price: "$250/hour" },
];

const Prices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Choose the plan that fits your business needs. All plans include
              our core IT management features.
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
                    Most Popular
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
                  <Link to="/contact">Get Started</Link>
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
              Additional Services
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Need something specific? We offer flexible add-on services.
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
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us to discuss your specific requirements and get a
              tailored quote.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
