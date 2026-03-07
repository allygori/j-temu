"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gradient-start/10 via-gradient-mid/5 to-gradient-end/10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-start/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-end/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative glass-card p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gradient-start/20 to-transparent blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-gradient-end/20 to-transparent blur-2xl" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground relative">
            Siap Menghemat Waktu &{" "}
            <span className="gradient-text">Meningkatkan Produktivitas?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto relative">
            Bergabung dengan ribuan profesional Indonesia yang sudah merasakan
            kemudahan penjadwalan otomatis. Gratis selamanya, upgrade kapan saja.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg transition-colors"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground hover:bg-muted font-semibold text-lg transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
