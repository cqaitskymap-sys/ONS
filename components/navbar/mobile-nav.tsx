"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowRight, X } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const serviceLinks = SERVICES.filter((s) => s.href.startsWith("/services/"));

function NavItem({
  href,
  label,
  active,
  onClick,
  nested,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  nested?: boolean;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "flex items-center justify-between gap-3 rounded-xl font-medium transition-all duration-200",
          nested ? "px-3 py-2.5 text-sm min-h-10" : "px-4 py-3.5 text-[15px] min-h-12",
          active
            ? "bg-primary/10 text-primary border border-primary/25 shadow-[inset_3px_0_0_0_hsl(var(--primary))]"
            : "text-foreground/85 border border-transparent hover:bg-white/5 hover:text-foreground"
        )}
      >
        <span className="leading-snug">{label}</span>
        {!nested && (
          <ArrowRight
            className={cn(
              "w-4 h-4 shrink-0 opacity-40 transition-all",
              active && "opacity-100 text-primary"
            )}
          />
        )}
      </Link>
    </SheetClose>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(
    () => pathname === "/services" || pathname.startsWith("/services/")
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "lg:hidden relative flex h-11 w-11 items-center justify-center rounded-xl",
          "border border-white/10 bg-white/[0.06] backdrop-blur-xl",
          "text-foreground transition-all duration-200",
          "hover:border-primary/35 hover:bg-primary/10 hover:text-primary",
          "active:scale-95",
          open && "border-primary/40 bg-primary/10 text-primary"
        )}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className={cn(
          "w-full max-w-[min(100vw,22rem)] p-0 gap-0 border-white/10",
          "bg-[#0a0f1a]/95 backdrop-blur-2xl supports-backdrop-filter:bg-[#0a0f1a]/90"
        )}
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-4 pt-5 pb-4 border-b border-white/10">
          <div className="min-w-0">
            <Logo size="nav" className="!h-9" />
            <p className="mt-1.5 text-xs text-muted-foreground tracking-wide uppercase">
              Navigation
            </p>
          </div>
          <SheetClose
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
              "border border-white/10 bg-white/5 text-muted-foreground",
              "transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            )}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </SheetClose>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link, i) =>
              "mega" in link && link.mega ? (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="flex items-stretch">
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex-1 flex items-center px-4 py-3.5 min-h-12 text-[15px] font-medium transition-colors",
                          isActive(link.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground/85 hover:bg-white/5"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn(
                        "flex w-12 shrink-0 items-center justify-center border-l border-white/10 transition-colors",
                        servicesOpen
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      )}
                      aria-expanded={servicesOpen}
                      aria-label={servicesOpen ? "Collapse services" : "Expand services"}
                    >
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 pb-2 pt-1 flex flex-col gap-0.5 border-t border-white/[0.06] bg-black/20">
                          {serviceLinks.map((service) => (
                            <NavItem
                              key={service.href}
                              href={service.href}
                              label={service.title}
                              active={pathname === service.href}
                              nested
                              onClick={() => setOpen(false)}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <NavItem
                    href={link.href}
                    label={link.label}
                    active={isActive(link.href)}
                    onClick={() => setOpen(false)}
                  />
                </motion.div>
              )
            )}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 border-t border-white/10 bg-black/25 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] space-y-2.5">
          <SheetClose asChild>
            <Link
              href="/contact"
              className={cn(
                "flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 min-h-12",
                "bg-primary text-primary-foreground font-semibold text-sm",
                "shadow-[0_0_24px_rgba(0,208,132,0.25)] transition-transform active:scale-[0.98]"
              )}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/get-quote"
              className={cn(
                "flex w-full items-center justify-center rounded-xl px-5 py-3 min-h-11",
                "border border-white/10 bg-white/5 text-sm font-medium text-foreground/90",
                "transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              )}
            >
              Request a Quote
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
