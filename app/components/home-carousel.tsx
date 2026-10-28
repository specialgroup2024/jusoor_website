"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { carouselSlides } from "@/app/reference-content";
import { getUi, localizePath, type Locale } from "@/app/lib/localized-ui";

const AUTOPLAY_MS = 7000;

export default function HomeCarousel({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ui = getUi(locale);
  const slideCount = carouselSlides.length;
  const slide = carouselSlides[activeIndex];
  const direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (paused) {
      return;
    }
    const id = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % slideCount),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, slideCount]);

  function showSlide(index: number) {
    setActiveIndex((index + slideCount) % slideCount);
  }

  return (
    <section
      aria-label={ui.carouselLabel}
      aria-roledescription={ui.carouselRole}
      className={`hero-carousel${paused ? " is-paused" : ""}`}
      data-slide={activeIndex}
      dir={direction}
      onBlur={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseOver={() => setPaused(true)}
    >
      <span aria-hidden="true" className="hero-orb hero-orb-a" />
      <span aria-hidden="true" className="hero-orb hero-orb-b" />
      <span aria-hidden="true" className="hero-grid-lines" />
      <span aria-hidden="true" className="hero-emblem">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 120 120">
          <path d="M60 8 L104 24 V56 C104 86 84 104 60 112 C36 104 16 86 16 56 V24 Z" strokeLinejoin="round" />
          <path d="M24 68 C40 44 80 44 96 68" strokeLinecap="round" />
          <path d="M60 30 V92" strokeLinecap="round" />
          <path d="M34 80 L60 68 L86 80" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div
        aria-atomic="true"
        aria-live="polite"
        className="carousel-copy"
        key={activeIndex}
      >
        <p className="eyebrow">{ui.heroLabel}</p>
        <h1>{slide.title[locale]}</h1>
        <h2>{slide.subtitle[locale]}</h2>
        <p className="carousel-description">{slide.description[locale]}</p>
        <div className="hero-actions">
          <Link
            className="button button-primary"
            href={localizePath(locale, slide.href)}
          >
            {slide.buttonText[locale]}
          </Link>
          <Link className="button button-ghost" href={localizePath(locale, "/coverage")}>
            {ui.coverage}
          </Link>
        </div>
        <ul aria-label={ui.whyLabel} className="hero-chips">
          {ui.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="carousel-controls">
        <button
          aria-label={ui.previousSlide}
          className="carousel-arrow"
          onClick={() => showSlide(activeIndex - 1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div aria-label={ui.chooseSlide} className="carousel-dots">
          {carouselSlides.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`${ui.showSlide} ${index + 1}: ${item.title[locale]}`}
              className={`carousel-dot${index === activeIndex ? " is-active" : ""}`}
              key={item.title.en}
              onClick={() => showSlide(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label={ui.nextSlide}
          className="carousel-arrow"
          onClick={() => showSlide(activeIndex + 1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}
