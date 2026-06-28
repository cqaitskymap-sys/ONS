"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Sheet,
  SheetClose,
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
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "py-4 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
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
            <div className="flex flex-col gap-2 mt-4">
              <Logo size="nav" className="mb-4 mx-auto" />
              {NAV_LINKS.map((link) =>
                "mega" in link && link.mega ? (
                  <div key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium transition-colors block",
                          pathname === link.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-1">
                      {SERVICES.filter((s) => s.href.startsWith("/services?service=")).map((service) => (
                        <SheetClose key={service.title} asChild>
                          <Link
                            href={service.href}
                            className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
                          >
                            {service.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ) : (
                  <SheetClose key={link.href} asChild>
                    <Link
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
                  </SheetClose>
                )
              )}
              <SheetClose asChild>
                <Link href="/contact" className="mt-4 block">
                  <MagneticButton className="w-full bg-primary text-primary-foreground">
                    Get Started
                  </MagneticButton>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
