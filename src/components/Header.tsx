import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, Menu, X } from "lucide-react";
import { useState } from "react";
const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/about",
  label: "About Us"
}, {
  href: "/services",
  label: "Services"
}, {
  href: "/prices",
  label: "Prices"
}, {
  href: "/contact",
  label: "Contact"
}];
const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-hover transition-all duration-300">
              <Monitor className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">it-kom</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                {link.label}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                {link.label}
              </Link>)}
            <div className="mt-4 px-4">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;