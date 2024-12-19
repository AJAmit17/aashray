'use client'

import { motion } from "framer-motion"
import { Cloud, Compass, MapPin, Shield } from "lucide-react"

const features = [
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Real-time Weather",
    description: "Get instant access to current weather conditions and forecasts"
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Location Based",
    description: "Accurate weather information for your exact location"
  },
  {
    icon: <Compass className="w-10 h-10" />,
    title: "Weather Alerts",
    description: "Receive timely alerts for severe weather conditions"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Reliable Data",
    description: "Powered by trusted meteorological sources"
  }
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the most comprehensive weather monitoring system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
