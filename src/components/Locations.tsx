import { motion } from "framer-motion";
import { LocationCard } from "./LocationCard";

const locations = [
  {
    name: "Pune",
    description: "Experience urban luxury in the heart of Maharashtra's cultural capital. Our Pune resort combines modern amenities with traditional hospitality.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
    rating: 4.8,
    price: "₹8,500",
    href: "/locations/pune",
    features: ["City Views", "Spa", "Fine Dining", "Business Center"]
  },
  {
    name: "Karjat",
    description: "Immerse yourself in nature's embrace at our Karjat property. Surrounded by lush greenery and pristine landscapes for the perfect retreat.",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?q=80&w=2000&auto=format&fit=crop",
    rating: 4.9,
    price: "₹12,000",
    href: "/locations/karjat",
    features: ["Nature Trails", "Adventure Sports", "Organic Farm", "Wellness"]
  },
  {
    name: "Lonavala",
    description: "Discover serenity in the Western Ghats. Our Lonavala resort offers breathtaking mountain views and rejuvenating experiences.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop",
    rating: 4.7,
    price: "₹10,500",
    href: "/locations/lonavala",
    features: ["Mountain Views", "Waterfall Access", "Yoga Deck", "Valley Views"]
  }
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Our
            <span className="block text-luxury-earth">Premium Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each of our carefully selected destinations offers a unique experience, 
            from urban sophistication to mountain tranquility and natural adventure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.2 }}
              // viewport={{ once: true }}
            >
              <LocationCard {...location} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}