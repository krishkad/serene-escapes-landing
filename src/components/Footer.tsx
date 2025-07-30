import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Our Locations",
    links: [
      { name: "Pune Resort", href: "/locations/pune" },
      { name: "Karjat Resort", href: "/locations/karjat" },
      { name: "Lonavala Resort", href: "/locations/lonavala" },
    ]
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Packages", href: "#locations" },
      { name: "Contact", href: "#contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Spa & Wellness", href: "#" },
      { name: "Fine Dining", href: "#" },
      { name: "Adventure Sports", href: "#" },
      { name: "Business Events", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cancellation Policy", href: "#" },
      { name: "FAQ", href: "#" },
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-luxury-earth text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-luxury rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-semibold">
                Serenity Resorts
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable luxury experiences across Maharashtra's most beautiful destinations. 
              Where nature meets comfort, and every moment becomes a cherished memory.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@serenityresorts.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-luxury-gold transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-luxury-gold transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-luxury-gold flex-1 lg:w-64"
              />
              <button className="px-6 py-2 bg-gradient-luxury hover:shadow-luxury rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Serenity Resorts. All rights reserved. | Crafted with ❤️ for luxury experiences
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-luxury-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}