import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      location: "United States",
      comment:
        "SecureVPN has been a game-changer for me. The speed is incredible and I can finally stream without buffering while staying protected.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Chen",
      location: "Canada",
      comment:
        "I travel frequently for work and SecureVPN keeps me safe on public WiFi. The app is so easy to use - just one tap and I'm protected!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Rodriguez",
      location: "Spain",
      comment:
        "After trying several VPN services, I've finally found one that doesn't slow down my connection. The customer support is also excellent.",
      rating: 4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

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
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex mb-2">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
            </div>
            <p className="text-sm">{testimonial.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

