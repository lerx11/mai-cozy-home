"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "./Icons";

// Fullscreen grid overlay of photos. Shared by the home Gallery and the tour
// pages. Clicking a photo calls `onSelect(index)`, which the parent uses to open
// the single-photo lightbox on top. X / Esc close only this grid overlay.
export default function PhotoGridOverlay({ open, images, onClose, onSelect }) {
  // Close on Esc (while a single-photo lightbox is not open).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="photo-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[55] bg-ink/95 backdrop-blur-sm"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo grid"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <CloseIcon />
          </button>

          {/* Scrollable grid : 2 cols mobile, 3 cols desktop */}
          <div className="h-full overflow-y-auto p-4 pt-20 sm:px-6 md:px-10">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-cream/10 outline-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}