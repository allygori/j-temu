"use client";

import { motion } from "framer-motion";
import { Calendar, Link, Bell } from "lucide-react";
import { features } from "@/lib/data";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Calendar: <Calendar className="h-6 w-6" />,
  Link: <Link className="h-6 w-6" />,
  Bell: <Bell className="h-6 w-6" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="fitur" className="py-24 sm:py-32 relative">
      {/* Background subtle decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-start/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-end/5 rounded-full blur-3xl" />
      </div>

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
            Fitur Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Semua yang Anda Butuhkan,{" "}
            <span className="gradient-text">Dalam Satu Platform</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dirancang khusus untuk profesional dan bisnis di Indonesia yang
            menghargai efisiensi waktu.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative glass-card p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gradient-start/0 to-gradient-end/0 group-hover:from-gradient-start/[0.02] group-hover:to-gradient-end/[0.02] transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
