"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { AmenityIcon, WhatsAppIcon } from "./Icons";
import { reveal } from "./About";
import Lightbox, { useLightbox } from "./Lightbox";
import PhotoGridOverlay from "./PhotoGridOverlay";

export default function StayWithUs() {
  const { stay } = siteConfig;
  const bookingLink = buildWhatsappLink(
    "Hi! I'd like to book a room at Sapa Mountain Lodge"
  );
  const { active, setActive, close, next, prev, current, normalized: roomImages } =
    useLightbox(stay.images);
  const [gridOpen, setGridOpen] = useState(false);

  return (
    <section id="stay" className="section">
      <div className="container-warm">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photos column (left) — vertical-scroll grid */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 gap-3 auto-rows-[150px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-sm:[&>*:nth-child(n+4)]:hidden sm:grid-cols-2 lg:max-h-[520px] lg:overflow-y-auto lg:grid-cols-3">
              {roomImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGridOpen(true)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink/5 outline-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-cream/0 transition-colors duration-300 group-hover:bg-cream/5" />
                </button>
              ))}
            </div>

            {/* Mobile only: show all photos in the grid overlay */}
            <div className="mt-4 flex justify-center sm:hidden">
              <button
                type="button"
                onClick={() => setGridOpen(true)}
                className="btn-green w-full sm:w-auto"
              >
                View All {roomImages.length} Photos
              </button>
            </div>
          </motion.div>

          {/* Content column (right) */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="eyebrow">{stay.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
              {stay.title}
            </h2>
            <p className="mt-2 text-ink/60 md:text-lg">{stay.subtitle}</p>

            <p className="mt-5 text-ink/75 leading-relaxed">{stay.description}</p>

            {/* Price range */}
            <p className="mt-5 font-display text-xl font-semibold text-rice">
              {stay.priceRange}
            </p>

            {/* Amenities grid */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2">
              {stay.amenities.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center gap-3 text-sm text-ink/75"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-rice/10 text-rice">
                    <AmenityIcon name={a.icon} width={18} height={18} />
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-8 w-full sm:w-auto"
            >
              <WhatsAppIcon width={16} height={16} />
              Book Your Stay via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen grid overlay of all room photos */}
      <PhotoGridOverlay
        open={gridOpen}
        images={roomImages}
        onClose={() => setGridOpen(false)}
        onSelect={setActive}
      />

      {/* Single-photo lightbox (opens above the grid) */}
      <Lightbox
        current={current}
        active={active}
        total={roomImages.length}
        close={close}
        next={next}
        prev={prev}
      />
    </section>
  );
}
