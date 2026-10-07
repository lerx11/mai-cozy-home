"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Reveal the floating button after a short scroll so it doesn't fight
  // the hero CTAs at the very top of the page.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsappLink(
            `Hi ${siteConfig.businessName}! I'd like to ask about a stay or tour.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sapa Mountain Lodge on WhatsApp"
          // Fade/slide only — no scale, so the button stays its fixed size.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
        >
          {/* Subtle shadow-pulse ring (box-shadow only — never scales) */}
          <span className="pointer-events-none absolute inset-0 rounded-full animate-whatsapp-pulse" />

          {/* Icon (kept above the pulse) */}
          <WhatsAppIcon width={28} height={28} className="relative" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
