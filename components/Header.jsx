"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsappLink } from "@/data/siteConfig";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  MenuIcon,
  CloseIcon,
  WhatsAppIcon,
} from "./Icons";

const socialItems = [
  { key: "instagram", href: siteConfig.socialLinks.instagram, Icon: InstagramIcon },
  { key: "facebook", href: siteConfig.socialLinks.facebook, Icon: FacebookIcon },
  { key: "tiktok", href: siteConfig.socialLinks.tiktok, Icon: TiktokIcon },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Slightly stronger background once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-soft"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-warm flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-lg font-semibold text-ink md:text-xl">
            {siteConfig.businessName}
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-rice md:text-[11px]">
            {siteConfig.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink/80 transition-colors hover:text-rice"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rice transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop social + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1">
            {socialItems.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="grid h-9 w-9 place-items-center rounded-full text-ink/70 transition-colors hover:bg-rice/10 hover:text-rice"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
          <a
            href={buildWhatsappLink(`Hi! I'd like to ask about staying at ${siteConfig.businessName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            <WhatsAppIcon width={16} height={16} />
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-ink/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-72 max-w-[80vw] flex-col gap-2 border-l border-ink/5 bg-cream p-6 shadow-lift lg:hidden"
            >
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-rice/10 hover:text-rice"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={buildWhatsappLink(`Hi! I'd like to ask about staying at ${siteConfig.businessName}.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-green mt-4 w-full"
              >
                <WhatsAppIcon width={16} height={16} />
                Book via WhatsApp
              </a>

              <div className="mt-auto flex items-center gap-3 pt-6">
                {socialItems.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="grid h-10 w-10 place-items-center rounded-full bg-rice/10 text-rice"
                  >
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
