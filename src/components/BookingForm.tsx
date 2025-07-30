import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, MapPin, Users, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(1, "Please select a location"),
  checkin: z.string().min(1, "Please select check-in date"),
  checkout: z.string().min(1, "Please select check-out date"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const locations = [
  { value: "pune", label: "Pune" },
  { value: "karjat", label: "Karjat" },
  { value: "lonavala", label: "Lonavala" },
];

const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5+", label: "5+ Guests" },
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking submission:", data);
    
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserve Your
            <span className="block text-luxury-earth">Perfect Getaway</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury? Fill out the form below and let us create 
            an unforgettable experience tailored just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-elegant border-0 bg-card">
            <CardHeader className="bg-gradient-luxury text-white rounded-t-lg">
              <CardTitle className="text-2xl font-heading text-center">
                Book Your Stay
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+91 XXXXX XXXXX"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location
                    </Label>
                    <Select onValueChange={(value) => setValue("location", value)}>
                      <SelectTrigger className={errors.location ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.value} value={location.value}>
                            {location.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.location && (
                      <p className="text-sm text-destructive">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="checkin" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check-in Date
                    </Label>
                    <Input
                      id="checkin"
                      type="date"
                      {...register("checkin")}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.checkin ? "border-destructive" : ""}
                    />
                    {errors.checkin && (
                      <p className="text-sm text-destructive">{errors.checkin.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkout" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check-out Date
                    </Label>
                    <Input
                      id="checkout"
                      type="date"
                      {...register("checkout")}
                      min={watch("checkin") || new Date().toISOString().split('T')[0]}
                      className={errors.checkout ? "border-destructive" : ""}
                    />
                    {errors.checkout && (
                      <p className="text-sm text-destructive">{errors.checkout.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Guests
                    </Label>
                    <Select onValueChange={(value) => setValue("guests", value)}>
                      <SelectTrigger className={errors.guests ? "border-destructive" : ""}>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.guests && (
                      <p className="text-sm text-destructive">{errors.guests.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Special Requests (Optional)</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Any special requests or preferences..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-luxury hover:shadow-luxury text-white font-semibold py-3 text-lg transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}