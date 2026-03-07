"use client";

import { motion } from "framer-motion";
import { Settings, Share2, CalendarCheck } from "lucide-react";
import { steps } from "@/lib/data";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Settings: <Settings className="h-6 w-6" />,
  Share2: <Share2 className="h-6 w-6" />,
  CalendarCheck: <CalendarCheck className="h-6 w-6" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-badge-bg text-badge-text text-sm font-medium mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tiga Langkah Menuju{" "}
            <span className="gradient-text">Penjadwalan Sempurna</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Setup cepat, tidak butuh keahlian teknis. Siapapun bisa mulai dalam
            hitungan menit.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  {iconMap[step.icon]}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
