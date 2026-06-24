"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Pill } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

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
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "py-5 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:glow-green transition-shadow">
            <Pill className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight">{COMPANY.name}</span>
          </div>
        </Link>

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
                    "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
                      <div className="glass-strong rounded-2xl p-6 grid grid-cols-2 gap-3 shadow-2xl">
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
                  "relative px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
          <Link href="/contact">
            <MagneticButton className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green">
              Get Started
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger className="lg:hidden p-2 rounded-xl glass">
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="glass-strong border-white/10 w-80">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-2 mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-4">
                <MagneticButton className="w-full bg-primary text-primary-foreground">
                  Get Started
                </MagneticButton>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
