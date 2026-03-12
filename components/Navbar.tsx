"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/onboarding",
    });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navbar-bg border-b border-navbar-border backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">Otonomy</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={handleSignIn}
              className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Masuk
            </button>
            <button
              onClick={handleSignIn}
              className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-lg transition-colors flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Coba Gratis
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-2">
                <button
                  onClick={handleSignIn}
                  className="block text-center px-4 py-2.5 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Masuk
                </button>
                <button
                  onClick={handleSignIn}
                  className="block text-center px-4 py-2.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-lg transition-colors"
                >
                  Coba Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
