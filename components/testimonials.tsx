import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      location: "United States",
      comment:
        "Novix VPN has completely changed the game for me, The Speed is Insane, I can stream without any buffering, without anyone stealing my data. Its like a breath of fresh air.",
      rating: 5,
      avatar: "/alex-johnson.jpg",
    },
    {
      name: "Sarah Chen",
      location: "Canada",
      comment:
        "I travel a lot for work, and Novix VPN has been a lifesaver on public wifi, I no longer have to worry about getting hacked, Just one tap and I am protected. It gives me peace of mind wherever I go.",
      rating: 5,
      avatar: "/sarah-chen.jpg",
    },
    {
      name: "Michael Rodriguez",
      location: "Spain",
      comment:
        "After trying a bunch of VPNs I can honestly say Novix is the best, Finally, a VPN that doesn’t slow down my connection, and their customer service is top-notch.",
      rating: 4,
      avatar: "/michael-rodriguez.jpeg",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
            <div className="flex mb-2">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
            </div>
            <p className="text-sm">{testimonial.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
