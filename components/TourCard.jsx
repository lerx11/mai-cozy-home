import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

// Difficulty → badge color mapping (color-coded as per spec).
const difficultyStyles = {
  Easy: "bg-rice text-cream",
  Medium: "bg-gold text-cream",
  Hard: "bg-ink/85 text-cream",
};

export default function TourCard({ tour, index = 0 }) {
  const cover = tour.images?.[0];

  return (
    <Link
      href={`/tours/${tour.slug}`}
      scroll
      aria-label={`View the ${tour.name} tour`}
      className="card-warm group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Photo (4:3) with badges — full card width, subtle zoom on hover */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
        {cover && (
          <Image
            src={cover}
            alt={tour.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        {/* Dark gradient for badge legibility */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/45 to-transparent" />

        {/* Duration badge — top left */}
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-ink shadow-soft backdrop-blur-sm">
          {tour.duration}
        </span>

        {/* Difficulty badge — top right, color-coded */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-soft ${
            difficultyStyles[tour.difficulty] || "bg-ink/80 text-cream"
          }`}
        >
          {tour.difficulty}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-rice">
          {tour.name}
        </h3>
        <p className="mt-1 font-display text-lg font-semibold text-rice">
          {tour.price}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-ink/70">
          {tour.shortDescription}
        </p>

        {/* "Read More" is a visual cue now — the whole card is the link */}
        <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-ink transition-colors group-hover:text-rice">
          Read More
          <ArrowRightIcon
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
