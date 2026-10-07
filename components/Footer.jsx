"use client";

import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "./Icons";
import { reveal } from "./About";

const socialItems = [
  { key: "instagram", href: siteConfig.socialLinks.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", href: siteConfig.socialLinks.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "tiktok", href: siteConfig.socialLinks.tiktok, Icon: TiktokIcon, label: "TikTok" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-warm py-16 md:py-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl text-cream">
              {siteConfig.businessName}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
              {siteConfig.shortIntro}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              {socialItems.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-whatsapp hover:text-white"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-cream">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-gold"
                  >
                    <ArrowRightIcon width={14} height={14} className="text-rice" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-cream">Visit us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>{siteConfig.address}</li>
              <li>
                <a
                  href={buildWhatsappLink(
                    `Hi ${siteConfig.businessName}! I'd like to ask about a stay.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <WhatsAppIcon width={16} height={16} className="text-whatsapp" />
                  {siteConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <p>
            Crafted with care in Sapa · Ta Van Village, Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
