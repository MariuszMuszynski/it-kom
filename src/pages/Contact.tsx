import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+48 123 456 789",
    subContent: "Pon-Pt 8:00-18:00",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "info@it-kom.pl",
    subContent: "Odpowiadamy w ciągu 24 godzin",
  },
  {
    icon: MapPin,
    title: "Biuro",
    content: "ul. Technologiczna 123",
    subContent: "00-001 Warszawa",
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    content: "Poniedziałek - Piątek",
    subContent: "8:00 - 18:00",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Wiadomość wysłana pomyślnie!", {
      description: "Odpowiemy w ciągu 24 godzin.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Skontaktuj <span className="text-gradient">się z nami</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Gotowy na transformację swojej infrastruktury IT? Chętnie Cię wysłuchamy.
              Napisz do nas i rozpocznijmy rozmowę.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Wyślij nam wiadomość
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Imię i nazwisko *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Adres e-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jan@firma.pl"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nazwa firmy
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Twoja Firma"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Opowiedz nam o swoim projekcie lub jak możemy Ci pomóc..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij wiadomość <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Dane kontaktowe
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground">{item.content}</p>
                        <p className="text-muted-foreground text-sm">
                          {item.subContent}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-2xl bg-muted h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Interaktywna mapa wkrótce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;