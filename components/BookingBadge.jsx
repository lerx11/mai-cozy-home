import { siteConfig } from "@/data/siteConfig";
import { StarIcon } from "./Icons";

// Booking.com rating badge. Visible text is just "Booking.com"; the href
// opens the full hotel page in a new tab. Used in the Hero and Reviews.
export default function BookingBadge({ className = "" }) {
  const { booking } = siteConfig;
  if (!booking) return null;

  return (
    <a
      href={booking.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${booking.displayText} rating: ${booking.rating} from ${booking.reviewCount} reviews`}
      className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-4 py-2 shadow-soft backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span className="text-sm font-semibold text-[#003580]">
        {booking.displayText}
      </span>
      <span className="flex items-center gap-1 text-sm text-ink/80">
        <StarIcon width={14} height={14} className="text-gold" />
        <span className="font-semibold text-ink">{booking.rating}</span>
        <span className="text-ink/50">· {booking.reviewCount} reviews</span>
      </span>
    </a>
  );
}
