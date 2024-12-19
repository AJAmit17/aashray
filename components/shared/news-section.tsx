'use client'

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const newsItems = [
    {
      title: "Climate change: Facing Earth's greatest challenge",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/29/full/1724908464-6407.jpg?im=FitAndFill=(826,465)",
      date: "May 30, 2023",
      admin: "admin"
    },
    {
      title: "Wildfires burn in Colorado and Texas",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/29/full/1724908464-6407.jpg?im=FitAndFill=(826,465)",
      date: "May 30, 2023",
      admin: "admin"
    },
    {
      title: "Severe storms hit major metropolitan areas",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/29/full/1724908464-6407.jpg?im=FitAndFill=(826,465)",
      date: "May 30, 2023",
      admin: "admin"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-foreground">Weather News</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/90">
              VIEW ALL
            </Button>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Stay updated with the latest weather news and forecasts
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden group bg-card shadow-sm hover:shadow-md transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{item.admin}</span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}