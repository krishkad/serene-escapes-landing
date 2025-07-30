import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LocationCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  href: string;
  features: string[];
}

export function LocationCard({ name, description, image, rating, price, href, features }: LocationCardProps) {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6 }}
      // viewport={{ once: true }}
      // whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-elegant hover:shadow-luxury transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center text-white">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="font-medium">{name}</span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-luxury-sage-light text-luxury-earth text-xs rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-foreground">{price}</span>
              <span className="text-muted-foreground ml-1">/night</span>
            </div>
            
            <Button asChild className="bg-gradient-luxury hover:shadow-luxury group">
              <Link to={href}>
                Explore
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}