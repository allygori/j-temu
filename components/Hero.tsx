"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-start/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-end/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-mid/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-badge-bg text-badge-text text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Platform Scheduling #1 di Indonesia</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Jadwalkan Pertemuan{" "}
              <span className="gradient-text">Tanpa Repot,</span>{" "}
              Fokus pada Bisnis Anda
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Biarkan klien memilih waktu yang tepat dari jadwal Anda secara otomatis. 
              Tidak ada lagi chat bolak-balik, konflik jadwal, atau no-show.
            </p>

            {/* Email CTA Form */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
              <button className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                Mulai Gratis
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Gratis selamanya • Tanpa kartu kredit • Setup 2 menit
            </p>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            {/* Main dashboard mockup */}
            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              <div className="rounded-xl bg-gradient-to-br from-gradient-start/5 via-gradient-mid/10 to-gradient-end/5 p-6 sm:p-8">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-4 w-40 bg-muted rounded-full" />
                </div>

                {/* Calendar grid mockup */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map(
                    (d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-medium text-muted-foreground py-1"
                      >
                        {d}
                      </div>
                    )
                  )}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${
                        i === 12
                          ? "bg-primary text-primary-foreground"
                          : i === 15 || i === 19 || i === 24
                          ? "bg-gradient-end/20 text-accent"
                          : "bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      {i + 1 <= 31 ? i + 1 : ""}
                    </div>
                  ))}
                </div>

                {/* Time slots */}
                <div className="space-y-2">
                  {["09:00 - 10:00  •  Meeting dengan Klien", "13:00 - 14:00  •  Konsultasi Desain", "16:00 - 16:30  •  Quick Call"].map(
                    (slot, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-muted/50 border border-border"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            i === 0
                              ? "bg-primary"
                              : i === 1
                              ? "bg-accent"
                              : "bg-green-400"
                          }`}
                        />
                        <span className="text-sm text-foreground">{slot}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Booking Dikonfirmasi</p>
                  <p className="text-xs text-muted-foreground">Baru saja • Rina W.</p>
                </div>
              </div>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-muted-foreground">Pertemuan minggu ini</p>
              <p className="text-2xl font-bold gradient-text">127</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
