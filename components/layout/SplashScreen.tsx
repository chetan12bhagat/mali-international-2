"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const dismissSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mali_splash_seen_active", "true");
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const navEntries = performance.getEntriesByType("navigation");
      const isReload =
        navEntries.length > 0 &&
        (navEntries[0] as PerformanceNavigationTiming).type === "reload";

      if (isReload) {
        sessionStorage.removeItem("mali_splash_seen_active");
      }

      const hasSeen = sessionStorage.getItem("mali_splash_seen_active");
      if (hasSeen && !isReload) {
        setShowSplash(false);
        return;
      }
    }

    // Lock body scroll during splash
    document.body.style.overflow = "hidden";

    // Auto dismiss after 2 seconds for a fast, elegant intro
    const timer = setTimeout(() => {
      dismissSplash();
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [dismissSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && isMounted && (
          <motion.div
            key="splash-logo-screen"
            onClick={dismissSplash}
            className="fixed inset-0 z-[99999] w-screen h-screen flex flex-col items-center justify-center bg-[#041B36] select-none cursor-pointer overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(6px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#C99A3A]/10 blur-[90px] pointer-events-none" />

            {/* Centered Brand Presentation */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              {/* Logo Emblem */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-6"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-2.5 shadow-[0_0_50px_rgba(201,154,58,0.25)] border-2 border-[#C99A3A]/40 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/main-logo.jpeg"
                    alt="Mali International Logo"
                    width={120}
                    height={120}
                    priority
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </motion.div>

              {/* Company Title */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold tracking-[0.12em] text-white uppercase font-sans leading-none"
              >
                Mali International
              </motion.h1>

              {/* Subtle Gold Accent Divider */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 48, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#C99A3A] to-transparent my-3.5"
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="text-xs sm:text-sm tracking-[0.2em] text-white/70 uppercase font-medium"
              >
                Global Trade &bull; Trusted Partnerships
              </motion.p>
            </div>

            {/* Quick Skip Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-8 text-[11px] uppercase tracking-widest text-white/50"
            >
              Tap anywhere to enter
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  );
}
