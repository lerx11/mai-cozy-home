"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { AmenityIcon, WhatsAppIcon } from "./Icons";
import { reveal } from "./About";

export default function StayWithUs() {
  const { stay, roomTypes } = siteConfig;
  const bookingLink = buildWhatsappLink(
    "Hi! I'd like to book a room at Sapa Mountain Lodge"
  );

  return (
    <section id="stay" className="section">
      <div className="container-warm">
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

          {/* Room cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roomTypes.map((room) => (
              <article
                key={room.name}
                className="overflow-hidden rounded-2xl border border-rice/15 bg-cream shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {room.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/70">{room.description}</p>
                  <p className="mt-3 font-display text-base font-semibold text-rice">
                    {room.price}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    Up to {room.guests} guests
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Amenities grid */}
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2">
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
    </section>
  );
}
