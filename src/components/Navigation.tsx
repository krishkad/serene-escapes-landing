import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Locations", href: "#locations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];
const navItemsOther = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Locations", href: "/#locations" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

const locations = [
  { name: "Pune", href: "/locations/pune" },
  { name: "Karjat", href: "/locations/karjat" },
  { name: "Lonavala", href: "/locations/lonavala" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-soft"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">
              Serenity Resorts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-gradient-luxury hover:shadow-luxury transition-all duration-300"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-2xl">
                  Serenity Resorts
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col mt-8 space-y-6">
                {location.pathname === "/"
                  ? navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </button>
                    ))
                  : navItemsOther.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-4 text-foreground">
                    Our Locations
                  </h3>
                  {locations.map((location) => (
                    <Link
                      key={location.name}
                      to={location.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@serenityresorts.com</span>
                  </div>
                </div>

                <Button
                  className="bg-gradient-luxury hover:shadow-luxury transition-all duration-300 mt-6"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
