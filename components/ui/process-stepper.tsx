"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const STEP_ICONS = [Search, Lightbulb, Rocket, LineChart] as const;

interface ProcessStepperProps {
  className?: string;
}

export function ProcessStepper({ className }: ProcessStepperProps) {
  const totalSteps = PROCESS_STEPS.length;

  return (
    <div className={cn("relative", className)}>
      {/* Desktop: connected horizontal flow */}
      <div className="hidden lg:block">
        <div className="relative mb-10 px-8">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
          <div className="grid grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center">
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-background">
                  {i + 1}
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            const isLast = i === totalSteps - 1;

            return (
              <div key={step.step} className="relative">
                {!isLast && (
                  <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/40 z-10" />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 h-full flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Step {i + 1} of {totalSteps}
                  </p>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile & tablet: vertical step-by-step flow */}
      <div className="lg:hidden">
        {PROCESS_STEPS.map((step, i) => {
          const Icon = STEP_ICONS[i];
          const isLast = i === totalSteps - 1;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex flex-col items-center shrink-0 w-12 sm:w-14">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-background z-10">
                  {i + 1}
                </div>
                {!isLast && (
                  <div className="flex flex-col items-center flex-1 py-1">
                    <div className="w-0.5 flex-1 min-h-6 bg-gradient-to-b from-primary/60 to-secondary/30" />
                    <ChevronDown className="w-4 h-4 text-primary/50 my-1" />
                  </div>
                )}
              </div>

              <div className={cn("flex-1 min-w-0", !isLast && "pb-5 sm:pb-6")}>
                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
                        Step {i + 1} of {totalSteps}
                      </p>
                      <h3 className="text-base sm:text-lg font-bold leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
