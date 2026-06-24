"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 mx-auto glow-green">
              <span className="text-2xl font-bold text-primary">L</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text mb-2">{COMPANY.name}</h1>
            <p className="text-muted-foreground text-sm">{COMPANY.tagline}</p>
          </motion.div>
          <motion.div
            className="mt-8 w-48 h-1 rounded-full bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-cyan-400 to-secondary rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
