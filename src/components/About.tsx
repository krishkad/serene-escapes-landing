import { motion } from "framer-motion";
import { Award, Users, MapPin, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Experience",
    description: "Curated luxury experiences that exceed expectations",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated staff ensuring your comfort and satisfaction",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located resorts in scenic destinations",
  },
  {
    icon: Heart,
    title: "Memorable Moments",
    description: "Creating unforgettable memories for you and your loved ones",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-nature overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "linear" }} // ease-in-out cubic-bezier
            viewport={{ once: true }} // triggers earlier and only once
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Luxury Meets
              <span className="block text-luxury-earth">Natural Beauty</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over a decade, Serenity Resorts has been crafting exceptional
              experiences across Maharashtra's most beautiful destinations. Our
              commitment to luxury, sustainability, and authentic hospitality
              has made us the preferred choice for discerning travelers seeking
              more than just accommodation.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From the bustling energy of Pune to the serene hills of Lonavala
              and the pristine nature of Karjat, each of our properties offers a
              unique gateway to luxury and tranquility.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-earth mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Luxury Suites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-earth mb-2">
                  10K+
                </div>
                <div className="text-muted-foreground">Happy Guests</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "linear" }} // ease-in-out cubic-bezier
            viewport={{ once: true }} // triggers earlier and only once
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368&auto=format&fit=crop"
                alt="Luxury resort interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-sage/20 rounded-full mb-4 group-hover:bg-luxury-sage/30 transition-colors">
                <feature.icon className="w-8 h-8 text-luxury-earth" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
