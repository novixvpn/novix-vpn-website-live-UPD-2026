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
      name: "Weekly",
      description: "Essential protection for individuals",
      price: 11.99,
      features: [
        "Connect 5 devices simultaneously",
        "Access to 60+ countries",
        "No-logs policy",
        "24/7 customer support",
      ],
      popular: false,
    },
    {
      name: "Yearly",
      description: "Complete protection for your digital life",
      price: 19.99,
      features: [
        "Connect 5 devices simultaneously",
        "Access to 100+ countries",
        "No-logs policy",
        "24/7 customer support",
        "Ad & malware blocker",
        "Split tunneling",
        "Dedicated IP address",
        "Password manager included",
      ],
      popular: true,
    },
    {
      name: "Monthly",
      description: "Advanced security for all your devices",
      price: 14.99,
      features: [
        "Connect 5 devices simultaneously",
        "Access to 90+ countries",
        "No-logs policy",
        "24/7 customer support",
        "Ad & malware blocker",
        "Split tunneling",
      ],
      popular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 max-w-fit mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`flex flex-col max-w-[22rem] ${
            plan.popular ? "border-primary shadow-lg" : ""
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
                <CardTitle>{plan.name}</CardTitle>
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
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">/mo</span>
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
