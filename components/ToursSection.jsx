"use client";

import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import TourCard from "./TourCard";
import { WhatsAppIcon } from "./Icons";
import { reveal } from "./About";

export default function ToursSection() {
  const tours = siteConfig.tours;

  return (
    <section id="tours" className="section bg-cream">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">Our Tours</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Trails through the Sapa highlands
          </h2>
          <p className="mt-4 text-ink/70">
            Three experiences led by local guides —
            from gentle village walks to high-ridge treks.
          </p>
        </motion.div>

        {/* Grid of tours */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <TourCard tour={tour} index={i} />
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-ink/70">
            Not sure which tour fits you? Message us and we&apos;ll help you
            choose.
          </p>
          <a
            href={buildWhatsappLink(
              "Hi! I'd like help choosing a tour at Sapa Mountain Lodge."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon width={16} height={16} />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
