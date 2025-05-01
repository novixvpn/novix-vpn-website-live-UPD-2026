import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingCardsProps {
  interval: "monthly" | "yearly"
}

export default function PricingCards({ interval }: PricingCardsProps) {
  const plans = [
    {
      name: "Basic",
      description: "Essential protection for individuals",
      priceMonthly: 11.99,
      priceYearly: 4.19,
      features: [
        "Connect 5 devices simultaneously",
        "Access to 60+ countries",
        "No-logs policy",
        "24/7 customer support",
      ],
      popular: false,
    },
    {
      name: "Premium",
      description: "Advanced security for all your devices",
      priceMonthly: 14.99,
      priceYearly: 5.24,
      features: [
        "Connect 8 devices simultaneously",
        "Access to 90+ countries",
        "No-logs policy",
        "24/7 customer support",
        "Ad & malware blocker",
        "Split tunneling",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      description: "Complete protection for your digital life",
      priceMonthly: 19.99,
      priceYearly: 6.99,
      features: [
        "Connect 10 devices simultaneously",
        "Access to 100+ countries",
        "No-logs policy",
        "24/7 customer support",
        "Ad & malware blocker",
        "Split tunneling",
        "Dedicated IP address",
        "Password manager included",
      ],
      popular: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="mt-1">{plan.description}</CardDescription>
              </div>
              {plan.popular && <Badge className="bg-primary">Most Popular</Badge>}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-4">
              <span className="text-4xl font-bold">
                ${interval === "monthly" ? plan.priceMonthly : plan.priceYearly}
              </span>
              <span className="text-muted-foreground">/mo</span>

              {interval === "yearly" && (
                <div className="mt-1">
                  <Badge variant="outline" className="text-primary border-primary">
                    Save 65%
                  </Badge>
                </div>
              )}
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`}>Get {plan.name}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

