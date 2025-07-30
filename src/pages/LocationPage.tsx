import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Wifi, Car, Utensils, Waves, MapPin, Calendar, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookingForm } from "@/components/BookingForm";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const locationData = {
  pune: {
    name: "Pune",
    tagline: "Urban Luxury Redefined",
    hero: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
    description: "Experience the perfect blend of urban sophistication and luxury hospitality in the heart of Maharashtra's cultural capital. Our Pune resort offers modern amenities, world-class dining, and impeccable service.",
    rating: 4.8,
    reviews: 324,
    packages: [
      {
        name: "Business Executive Suite",
        price: "₹8,500",
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
        features: ["City View", "Business Lounge", "High-speed WiFi", "Meeting Room Access"],
        description: "Perfect for business travelers with premium amenities and city views."
      },
      {
        name: "Luxury City Retreat",
        price: "₹12,000",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop",
        features: ["Spa Access", "Fine Dining", "Concierge Service", "Airport Transfer"],
        description: "Ultimate luxury experience with personalized service and premium amenities."
      }
    ],
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Car, name: "Valet Parking" },
      { icon: Utensils, name: "Fine Dining" },
      { icon: Waves, name: "Spa & Wellness" }
    ],
    daySchedule: [
      { time: "3:00 PM", activity: "Check-in & Welcome Refreshments", description: "Warm welcome with traditional aarti and refreshing beverages" },
      { time: "4:00 PM", activity: "City Tour & Shopping", description: "Guided tour of Pune's cultural landmarks and premium shopping districts" },
      { time: "7:00 PM", activity: "Sunset Cocktails", description: "Signature cocktails at our rooftop bar with panoramic city views" },
      { time: "8:00 PM", activity: "Gourmet Dinner", description: "Multi-cuisine fine dining experience with live music" },
      { time: "10:00 AM", activity: "Business Center & Spa", description: "Modern facilities for work or relaxation at our award-winning spa" },
      { time: "11:00 AM", activity: "Check-out & Departure", description: "Complimentary breakfast and seamless check-out experience" }
    ]
  },
  karjat: {
    name: "Karjat",
    tagline: "Nature's Luxury Haven",
    hero: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?q=80&w=2000&auto=format&fit=crop",
    description: "Immerse yourself in pristine nature while enjoying world-class luxury amenities. Our Karjat property offers adventure activities, organic dining, and wellness experiences in a breathtaking natural setting.",
    rating: 4.9,
    reviews: 456,
    packages: [
      {
        name: "Adventure Seeker Package",
        price: "₹10,000",
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368&auto=format&fit=crop",
        features: ["Trekking", "River Rafting", "Organic Meals", "Bonfire Night"],
        description: "Perfect for adventure enthusiasts with thrilling activities and natural experiences."
      },
      {
        name: "Wellness Retreat Package",
        price: "₹15,000",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop",
        features: ["Yoga Sessions", "Ayurvedic Spa", "Organic Farm Tour", "Meditation"],
        description: "Complete wellness experience with holistic treatments and mindful activities."
      }
    ],
    amenities: [
      { icon: Wifi, name: "Nature WiFi Zones" },
      { icon: Car, name: "Adventure Transport" },
      { icon: Utensils, name: "Organic Dining" },
      { icon: Waves, name: "Natural Springs" }
    ],
    daySchedule: [
      { time: "2:00 PM", activity: "Arrival & Nature Welcome", description: "Traditional welcome with fresh fruit juices and nature orientation" },
      { time: "3:30 PM", activity: "Adventure Activities", description: "Choice of trekking, river rafting, or rock climbing with expert guides" },
      { time: "6:00 PM", activity: "Organic Farm Tour", description: "Guided tour of our sustainable farm with fresh produce tasting" },
      { time: "8:00 PM", activity: "Bonfire & Dinner", description: "Traditional outdoor dining experience under the stars" },
      { time: "6:00 AM", activity: "Sunrise Yoga & Meditation", description: "Morning wellness session in our serene valley location" },
      { time: "10:00 AM", activity: "Spa & Departure", description: "Rejuvenating spa treatment before your journey home" }
    ]
  },
  lonavala: {
    name: "Lonavala",
    tagline: "Mountain Serenity & Luxury",
    hero: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop",
    description: "Discover tranquility in the Western Ghats with breathtaking mountain views, waterfall access, and premium accommodations. Perfect for romantic getaways and peaceful retreats.",
    rating: 4.7,
    reviews: 289,
    packages: [
      {
        name: "Romantic Mountain Getaway",
        price: "₹9,500",
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
        features: ["Valley Views", "Couple's Spa", "Private Dining", "Waterfall Access"],
        description: "Intimate experience with stunning views and personalized romantic amenities."
      },
      {
        name: "Family Adventure Package",
        price: "₹13,000",
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368&auto=format&fit=crop",
        features: ["Family Suites", "Kids Activities", "Nature Walks", "Waterfall Picnic"],
        description: "Perfect family vacation with activities for all ages and mountain adventures."
      }
    ],
    amenities: [
      { icon: Wifi, name: "Mountain WiFi" },
      { icon: Car, name: "Valley Transport" },
      { icon: Utensils, name: "Multi-cuisine" },
      { icon: Waves, name: "Waterfall Access" }
    ],
    daySchedule: [
      { time: "2:30 PM", activity: "Mountain Check-in", description: "Scenic arrival with welcome drinks overlooking the valley" },
      { time: "4:00 PM", activity: "Waterfall Excursion", description: "Guided hike to nearby waterfalls with refreshment stops" },
      { time: "6:30 PM", activity: "Sunset Viewing", description: "Prime valley viewpoint with photography opportunities" },
      { time: "8:00 PM", activity: "Mountain Cuisine Dinner", description: "Local specialties and international cuisine with valley views" },
      { time: "7:00 AM", activity: "Morning Mist Walk", description: "Peaceful nature walk through misty mountain trails" },
      { time: "10:30 AM", activity: "Spa & Departure", description: "Final relaxation with mountain views before check-out" }
    ]
  }
};

export function LocationPage() {
  const { location } = useParams<{ location: string }>();
  const data = location ? locationData[location as keyof typeof locationData] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Location Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.hero}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center text-luxury-gold hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
              Luxury in {data.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-luxury-gold mb-6 font-light">
              {data.tagline}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {data.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-lg font-semibold">{data.rating}</span>
                <span className="text-gray-300">({data.reviews} reviews)</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-luxury hover:shadow-luxury px-8 py-4 text-lg"
              onClick={() => document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exclusive Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully curated packages designed to provide the perfect {data.name} experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-full font-bold text-lg">
                      {pkg.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="bg-luxury-sage-light text-luxury-earth">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-luxury hover:shadow-luxury">
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day at the Resort */}
      <section className="py-20 bg-luxury-sage-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Perfect Day in {data.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience a carefully orchestrated day of luxury, adventure, and relaxation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {data.daySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-luxury-gold text-white px-3 py-1 rounded-full font-semibold text-sm">
                      {item.time}
                    </div>
                    <Calendar className="w-5 h-5 text-luxury-earth" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    {item.activity}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center text-white font-bold text-xl shadow-luxury">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Premium Amenities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {data.amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-luxury-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-luxury-earth" />
                </div>
                <h3 className="font-semibold text-foreground">{amenity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />
    </div>
  );
}