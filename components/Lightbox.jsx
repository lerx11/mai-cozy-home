"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, ArrowRightIcon, ArrowLeftIcon } from "./Icons";

// Reusable lightbox hook + modal, shared by the home Gallery, Stay With Us,
// and other sections. Accepts `images` as [{ src, alt }] or plain string array
// (auto-generates alt). Keyboard navigation and touch swipe are built in.
export function useLightbox(images, tourName) {
  const normalized = images.map((img) =>
    typeof img === "string" ? { src: img, alt: `${tourName || "Photo"}` } : img
  );
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((i) => (i === null ? i : (i + 1) % normalized.length)),
    [normalized.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + normalized.length) % normalized.length
      ),
    [normalized.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : normalized[active];
  return { active, setActive, close, next, prev, current, normalized };
}

// Fullscreen lightbox modal.
export default function Lightbox({ active, current, total, close, next, prev }) {
  // Track horizontal swipe distance for touch support.
  const touchStartX = useRef(null);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <CloseIcon />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-4"
          >
            <ArrowLeftIcon />
          </button>

          {/* Image (captures touch for swipe) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                touchStartX.current = null;
                if (dx < -50) next();
                if (dx > 50) prev();
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-cream/80">
                {current.alt}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-4"
          >
            <ArrowRightIcon />
          </button>

          {/* Counter 1 / N */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">
            {active + 1} / {total}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}