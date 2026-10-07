"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { StarIcon } from "./Icons";
import { reveal } from "./About";
import BookingBadge from "./BookingBadge";

// Render 5 stars, filling the first `rating` and dimming the rest.
function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          width={16}
          height={16}
          className={i < rating ? "text-gold" : "text-ink/15"}
        />
      ))}
    </div>
  );
}

// Derive initials for the avatar bubble.
function initials(name = "") {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  const reviews = siteConfig.reviews;

  return (
    <section id="reviews" className="section bg-cream">
      <div className="container-warm">
        {/* Heading with rating summary */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">Guest Reviews</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            What our guests say
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-5 py-2 shadow-soft">
            <Stars rating={5} />
            <span className="font-display text-lg font-semibold text-ink">
              {siteConfig.rating}
            </span>
            <span className="text-sm text-ink/60">
              · {siteConfig.reviewCount} reviews
            </span>
          </div>

          {/* Booking.com rating badge */}
          <div className="mt-4">
            <BookingBadge />
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="card-warm flex flex-col p-7"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-ink/75 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-rice/10 font-display text-sm font-semibold text-rice">
                  {initials(review.name)}
                </div>
                <div>
                  <p className="font-medium text-ink">{review.name}</p>
                  <p className="text-xs text-ink/60">
                    {review.country} · {review.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
