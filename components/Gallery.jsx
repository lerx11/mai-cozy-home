"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRightIcon, ArrowLeftIcon } from "./Icons";
import { reveal } from "./About";
import Lightbox, { useLightbox } from "./Lightbox";
import PhotoGridOverlay from "./PhotoGridOverlay";

// -------- Home page gallery (horizontal scroll strip) --------
export default function Gallery() {
  const { active, setActive, close, next, prev, current, normalized: images } =
    useLightbox(siteConfig.gallery);
  const [gridOpen, setGridOpen] = useState(false);
  const stripRef = useRef(null);

  // Smoothly scroll the strip by roughly one card width.
  const scrollStrip = (dir) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  // Close the grid overlay on Esc (while a single-photo lightbox is not open).
  useEffect(() => {
    if (!gridOpen || active !== null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setGridOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gridOpen, active]);

  return (
    <section id="gallery" className="section">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">Gallery</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Moments from the valley
          </h2>
          <p className="mt-4 text-ink/70">
            A glimpse of the trails, villages, and people you&apos;ll meet at
            Sapa Mountain Lodge.
          </p>
        </motion.div>

        {/* Horizontal scrollable strip */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12"
        >
          <div className="relative">
            {/* Soft edge fades to hint at more content */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream to-transparent md:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream to-transparent md:w-16" />

            <div
              ref={stripRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGridOpen(true)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group relative aspect-[4/3] w-[240px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-ink/5 shadow-soft outline-none md:w-[320px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 55vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="p-4 text-left text-xs font-medium text-cream">
                      {img.alt}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop scroll arrows (hidden on mobile) */}
            <button
              type="button"
              onClick={() => scrollStrip(-1)}
              aria-label="Scroll photos left"
              className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
            >
              <ArrowLeftIcon width={18} height={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollStrip(1)}
              aria-label="Scroll photos right"
              className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
            >
              <ArrowRightIcon width={18} height={18} />
            </button>
          </div>

          {/* Counter + See All button */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
              {images.length} photos
            </span>
            <button
              type="button"
              onClick={() => setGridOpen(true)}
              className="btn-gold"
            >
              See All Photos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen grid overlay (Gallery only) */}
      <PhotoGridOverlay
        open={gridOpen}
        images={images}
        onClose={() => setGridOpen(false)}
        onSelect={setActive}
      />

      {/* Single-photo lightbox (opens above the grid) */}
      <Lightbox
        current={current}
        active={active}
        total={images.length}
        close={close}
        next={next}
        prev={prev}
      />
    </section>
  );
}

// -------- Tour page photo gallery (horizontal scroll strip + grid overlay) --------
// Exported separately so the server-component tour page can import it (it's a
// Client Component via the "use client" directive at the top of this file).
export function TourPhotoGallery({ images = [], tourName = "" }) {
  const { active, setActive, close, next, prev, current, normalized } =
    useLightbox(images, tourName);
  const [gridOpen, setGridOpen] = useState(false);
  const stripRef = useRef(null);

  if (!normalized.length) return null;

  // Smoothly scroll the strip by roughly one card width.
  const scrollStrip = (dir) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * 312, behavior: "smooth" });
  };

  return (
    <>
      {/* Horizontal scrollable strip */}
      <div className="relative">
        <div
          ref={stripRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {normalized.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative aspect-[4/3] w-[240px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-ink/5 outline-none md:w-[280px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 55vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-cream/0 transition-colors duration-300 group-hover:bg-cream/5" />
            </button>
          ))}
        </div>

        {/* Desktop scroll arrows (hidden on mobile) */}
        <button
          type="button"
          onClick={() => scrollStrip(-1)}
          aria-label="Scroll photos left"
          className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
        >
          <ArrowLeftIcon width={18} height={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollStrip(1)}
          aria-label="Scroll photos right"
          className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
        >
          <ArrowRightIcon width={18} height={18} />
        </button>
      </div>

      {/* Counter + View All button (below the strip; centered on mobile, right on desktop) */}
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={() => setGridOpen(true)}
          className="rounded-full bg-rice px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-rice/90"
        >
          View All Photos
        </button>
        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
          {normalized.length} photos
        </span>
      </div>

      {/* Fullscreen grid overlay for this tour's photos */}
      <PhotoGridOverlay
        open={gridOpen}
        images={normalized}
        onClose={() => setGridOpen(false)}
        onSelect={setActive}
      />

      {/* Shared lightbox (opens above the grid) */}
      <Lightbox
        current={current}
        active={active}
        total={normalized.length}
        close={close}
        next={next}
        prev={prev}
      />
    </>
  );
}