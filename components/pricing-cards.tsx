import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PricingCardsProps {}

export default function PricingCards({}: PricingCardsProps) {
  const plans = [
    {
      name: "Weekly Plan",
      originalPrice: "$5.99",
      price: "$1.79 / week",
      description: "Essential protection for individuals",
      features: [
        "Connect 5 devices simultaneously",
        "No-logs policy",
        "24/7 customer support",
        "Ad & Malware Blocker",
        "Free Kill Switch",
        "48-hour money-back guarantee",
      ],
      popular: true,
    },
    {
      name: "Yearly Plan",
      originalPrice: "$160.00",
      price: "$48.00 / year",
      monthlyEquivalent: "~$4.00/month",
      description: "Complete protection for your digital life. Save 70%",
      features: [
        "Connect 5 devices simultaneously",
        "No-logs policy",
        "Free Kill Switch",
        "24/7 customer support",
        "Ad & Malware Blocker",
        // "3-Day-Claim Extra Bonus",
        "48-hour money-back guarantee",
      ],
      popular: true,
    },
    {
      name: "Monthly Plan",
      originalPrice: "$17.99",
      price: "$5.39 / month",
      description: "Complete protection for your digital life",
      features: [
        "Connect 5 devices simultaneously",
        "No-logs policy",
        "24/7 customer support",
        "Ad & Malware Blocker",
        "Free Kill Switch",
        "48-hour money-back guarantee",
      ],
      popular: true,
    },
  ];

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 justify-items-center gap-6 max-w-fit mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`flex flex-col max-w-[22rem] ${
            plan.popular ? "border-primary shadow-xl" : ""
          }`}
        >
          {plan.popular && (
            <div className="relative w-full flex justify-center items-center">
              <Badge className="absolute bg-primary -top-3">Save 70% off</Badge>
            </div>
          )}
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                {/* <CardTitle>{plan.name}</CardTitle> */}
                <CardTitle>
                  {plan.name.includes("Monthly") || plan.name.includes("Weekly")
                    ? "🔵 "
                    : ""}
                  {plan.name}
                </CardTitle>

                <CardDescription className="mt-1">
                  {plan.description}
                </CardDescription>
              </div>
              {/* {plan.popular && (
                <Badge className="bg-primary">Most Popular</Badge>
              )} */}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-4 space-y-1">
              {plan.originalPrice && (
                <div className="line-through text-muted-foreground text-sm">
                  {plan.originalPrice}
                </div>
              )}
              <div className="text-xl font-semibold">{plan.price}</div>
              {plan.monthlyEquivalent && (
                <div className="text-sm text-muted-foreground">
                  {plan.monthlyEquivalent}
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
            <Link href="/">
              <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`}>
                Get {plan.name}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
