import { Link } from "react-router-dom";
import { Monitor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">it-kom</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Profesjonalne rozwiązania IT dla firm każdej wielkości. Pomagamy
              wykorzystać technologię do osiągnięcia Twoich celów.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {[
                { label: "O nas", path: "/about" },
                { label: "Usługi", path: "/services" },
                { label: "Cennik", path: "/prices" },
                { label: "Kontakt", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              {[
                "Rozwiązania chmurowe",
                "Cyberbezpieczeństwo",
                "Konsulting IT",
                "Zarządzane usługi",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                info@it-kom.pl
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                +48 123 456 789
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                ul. Technologiczna 123
                <br />
                00-001 Warszawa
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} it-kom. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;