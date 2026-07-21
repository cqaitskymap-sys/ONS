"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MobileNav } from "@/components/navbar/mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "border-b border-white/10 backdrop-blur-xl",
        scrolled
          ? "bg-background/98 py-2 sm:py-3 shadow-lg shadow-black/40"
          : "bg-background/95 py-2.5 sm:py-4 shadow-md shadow-black/30"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 min-w-0">
        <Logo size="nav" priority />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            "mega" in link && link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                    "drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/90 hover:text-foreground hover:bg-white/10"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", megaOpen && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                    >
                      <div className="bg-card border border-white/10 rounded-2xl p-6 grid grid-cols-2 gap-3 shadow-2xl shadow-black/50">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="p-4 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                  "drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/90 hover:text-foreground hover:bg-white/10"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <MagneticButton
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green"
          >
            Get Started
          </MagneticButton>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </nav>
    </header>
  );
}
