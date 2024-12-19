import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Phone, Map } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Emergency Resources",
      description: "Access critical resources and emergency supplies information",
      href: "/resources"
    },
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Stay informed with immediate emergency updates and notifications",
      href: "/alerts"
    },
    {
      icon: Map,
      title: "Interactive Map",
      description: "View emergency facilities and safe routes in your area",
      href: "/map"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Quick access to emergency services and important contacts",
      href: "/emergency"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Disaster Management System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive platform for disaster preparedness, response, and community resilience
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="space-y-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <h2 className="font-semibold text-xl">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Need Immediate Assistance?</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="destructive" asChild>
            <Link href="/emergency">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Contact
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/chat">
              Get AI Assistance
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}