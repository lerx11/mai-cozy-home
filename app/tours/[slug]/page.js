import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TourCard from "@/components/TourCard";
import { TourPhotoGallery } from "@/components/Gallery";
import {
  siteConfig,
  getTourBySlug,
  getSimilarTours,
  buildTourBookingLink,
} from "@/data/siteConfig";
import {
  WhatsAppIcon,
  CheckIcon,
  CloseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@/components/Icons";

// Difficulty → badge color (mirrors TourCard).
const difficultyStyles = {
  Easy: "bg-rice text-cream",
  Medium: "bg-gold text-cream",
  Hard: "bg-ink/85 text-cream",
};

// Pre-render every tour page at build time.
export async function generateStaticParams() {
  return siteConfig.tours.map((t) => ({ slug: t.slug }));
}

// Per-tour SEO metadata.
export async function generateMetadata({ params }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.name,
    description: tour.shortDescription,
    openGraph: {
      title: `${tour.name} · ${siteConfig.businessName}`,
      description: tour.shortDescription,
    },
  };
}

export default function TourPage({ params }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();
  const similar = getSimilarTours(tour.slug, 3);
  const bookingLink = buildTourBookingLink(tour.name);

  return (
    <>
      <Header />

      {/* Hero with tour image */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-20">
        <Image
          src={tour.images[0]}
          alt={tour.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />

        <div className="container-warm relative z-10 pb-12 text-cream">
          {/* Back link */}
          <Link
            href="/#tours"
            className="mb-6 inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
          >
            <ArrowLeftIcon width={16} height={16} />
            Back to all tours
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-ink">
              {tour.duration}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                difficultyStyles[tour.difficulty] || "bg-ink/80 text-cream"
              }`}
            >
              {tour.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1 text-xs text-cream/90 backdrop-blur-sm">
              <StarIcon width={12} height={12} className="text-gold" />
              {siteConfig.rating}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight drop-shadow-sm sm:text-4xl md:text-5xl">
            {tour.name}
          </h1>
          <p className="mt-3 font-display text-xl font-semibold text-gold md:text-2xl">
            {tour.price}
          </p>
        </div>
      </section>

      {/* Booking bar */}
      <div className="border-b border-ink/5 bg-cream">
        <div className="container-warm flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-ink/70">
            From <span className="font-semibold text-ink">{tour.price}</span> ·{" "}
            {tour.duration} · {tour.difficulty}
          </p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon width={16} height={16} />
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Photo gallery — featured + responsive grid, right after title/price */}
      {tour.images.length > 0 && (
        <section className="section pt-10">
          <div className="container-warm">
            <h2 className="mb-6 font-display text-2xl text-ink md:text-3xl">
              Photo gallery
            </h2>
            <TourPhotoGallery images={tour.images} tourName={tour.name} />
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="section">
        <div className="container-warm grid gap-12 lg:grid-cols-3">
          {/* Left: description, highlights, itinerary */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              About this tour
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              {tour.fullDescription}
            </p>

            {/* Highlights */}
            <h3 className="mt-10 font-display text-xl text-ink">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-rice/15 text-rice">
                    <CheckIcon width={14} height={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Itinerary */}
            <h3 className="mt-10 font-display text-xl text-ink">Itinerary</h3>
            <ol className="mt-4 space-y-5">
              {tour.itinerary.map((step, i) => (
                <li key={i} className="relative flex gap-5">
                  {/* Timeline dot + line */}
                  <div className="flex flex-col items-center">
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-rice/10 font-display text-xs font-semibold text-rice">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < tour.itinerary.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-ink/10" />
                    )}
                  </div>
                  <div className="pb-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-gold">
                      {step.time}
                    </p>
                    <p className="mt-0.5 font-medium text-ink">{step.title}</p>
                    <p className="mt-1 text-sm text-ink/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: sticky info card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-warm p-6">
              <h3 className="font-display text-lg text-ink">Tour details</h3>

              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Duration</dt>
                  <dd className="font-medium text-ink">{tour.duration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Difficulty</dt>
                  <dd className="font-medium text-ink">{tour.difficulty}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Price</dt>
                  <dd className="font-medium text-rice">{tour.price}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Start</dt>
                  <dd className="font-medium text-ink">{tour.startTime}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">End</dt>
                  <dd className="font-medium text-ink">{tour.endTime}</dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-ink/5 pt-5 text-sm">
                <p className="text-xs uppercase tracking-wider text-ink/50">
                  Meeting point
                </p>
                <p className="mt-1 text-ink/80">{tour.meetingPoint}</p>
              </div>

              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon width={16} height={16} />
                Book via WhatsApp
              </a>
            </div>

            {/* Included / not included */}
            <div className="card-warm mt-6 p-6">
              <h3 className="font-display text-lg text-ink">What&apos;s included</h3>
              <ul className="mt-3 space-y-2">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/75">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-rice/15 text-rice">
                      <CheckIcon width={14} height={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 font-display text-lg text-ink">
                Not included
              </h3>
              <ul className="mt-3 space-y-2">
                {tour.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/60">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-ink/10 text-ink/50">
                      <CloseIcon width={14} height={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Similar tours */}
      <section className="section pt-0">
        <div className="container-warm">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              You might also like
            </h2>
            <Link
              href="/#tours"
              className="inline-flex items-center gap-2 text-sm font-medium text-rice transition-colors hover:text-gold"
            >
              View all tours
              <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((t, i) => (
              <TourCard key={t.slug} tour={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
