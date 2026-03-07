"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { pricingTiers } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="harga" className="py-24 sm:py-32 bg-muted/30">
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
            Harga
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Paket Harga{" "}
            <span className="gradient-text">Transparan & Terjangkau</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mulai dari gratis, upgrade kapan saja sesuai kebutuhan bisnis Anda.
            Tanpa biaya tersembunyi.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative glass-card p-6 lg:p-8 flex flex-col ${
                tier.isPopular
                  ? "border-primary/50 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-semibold whitespace-nowrap">
                  ⭐ Paling Populer
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl lg:text-4xl font-extrabold text-foreground">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted-foreground text-sm ml-1">
                    {tier.period}
                  </span>
                )}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors mb-6 cursor-pointer ${
                  tier.isPopular
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground"
                    : "bg-secondary hover:bg-muted text-secondary-foreground border border-border"
                }`}
              >
                {tier.ctaText}
              </button>

              {/* Feature list */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-check shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-cross shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
