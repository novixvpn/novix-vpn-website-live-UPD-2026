import Link from "next/link"
import { Shield, Zap, Globe, Server, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            One VPN. 360° Protection. Zero Hassle.
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            No complex configurations. No tech skills needed. Just install, tap connect, and you're instantly protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Complete Security</h3>
            <p className="text-muted-foreground mb-4">Military-grade encryption and advanced security features</p>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/features">Learn More</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning-Fast Speeds</h3>
            <p className="text-muted-foreground mb-4">Optimized for streaming, gaming, and downloads</p>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/high-speed-vpn">Learn More</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
            <p className="text-muted-foreground mb-4">3,000+ servers in 90+ countries worldwide</p>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/vpn-servers">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">No User Tracking</h3>
            <p className="text-muted-foreground mb-4">Strict no-logs policy to protect your privacy</p>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/no-user-tracking">Learn More</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">30-Day Money-Back</h3>
            <p className="text-muted-foreground mb-4">Try Novix VPN risk-free with our guarantee</p>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/money-back-guarantee">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

