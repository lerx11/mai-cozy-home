"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { WhatsAppIcon, ArrowRightIcon, StarIcon } from "./Icons";
import BookingBadge from "./BookingBadge";

const heroImage = siteConfig.hero.backgroundImage;

// Shared animation variants for the staggered entrance.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Sunrise over the Sapa rice terraces"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/70" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-warm relative z-10 flex flex-col items-center text-center text-cream"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-sm"
        >
          <StarIcon width={14} height={14} className="text-gold" />
          {siteConfig.rating} · {siteConfig.reviewCount} reviews
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-4xl font-semibold leading-tight drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {siteConfig.hero.title || siteConfig.businessName}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-display text-lg italic text-cream/90 md:text-2xl"
        >
          {siteConfig.hero.subtitle || siteConfig.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 md:text-base"
        >
          {siteConfig.hero.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#tours" className="btn-gold w-full sm:w-auto">
            Explore Tours
            <ArrowRightIcon width={16} height={16} />
          </a>
          <a
            href={buildWhatsappLink(
              `Hi! I'd like to book a stay or tour at ${siteConfig.businessName}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon width={16} height={16} />
            Book Now
          </a>
        </motion.div>

        {/* Booking.com rating badge */}
        <motion.div variants={item} className="mt-8">
          <BookingBadge />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-cream"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-cream"
          />
        </span>
      </motion.a>
    </section>
  );
}
