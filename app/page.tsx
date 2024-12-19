'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

import Image from 'next/image'
import { useRef } from 'react'
import NewsSection from "@/components/shared/news-section"
import WeatherSection from "@/components/shared/weather-section"
import FeatureSection from "@/components/shared/feature-section"
import Footer from "@/components/shared/footer"

export default function DisasterManagement() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen relative bg-background">
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8]) }}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"
      ></motion.div>

      <div className="relative z-20">

        <div className="container mx-auto px-6 py-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold leading-tight text-foreground mb-6">
              Disaster Management & Emergency Response
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Aashray helps you stay prepared and connected during emergencies
            </p>
            <div className="max-w-xl mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search for emergency services or locations..."
                className="w-full pl-10 pr-4 py-3 bg-background/50 backdrop-blur-sm border-border"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
                <p>Real-time notifications about natural disasters and emergencies in your area</p>
              </div>
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl font-bold mb-4">Resource Locator</h3>
                <p>Find nearby shelters, medical facilities, and emergency services</p>
              </div>
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl font-bold mb-4">Community Support</h3>
                <p>Connect with local communities and emergency response teams</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Weather Monitoring</h2>
            <p className="text-muted-foreground">
              Stay informed about weather conditions that could lead to potential emergencies
            </p>
          </div>
          <WeatherSection />
        </motion.div>

        <FeatureSection />

        <div className="bg-muted/50">
          <NewsSection />
        </div>
      </div>
    </div>
  )
}