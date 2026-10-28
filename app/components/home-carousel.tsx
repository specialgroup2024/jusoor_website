"use client";

import Link from "next/link";
import { useState } from "react";
import { carouselSlides } from "@/app/reference-content";
import { getUi, localizePath, type Locale } from "@/app/lib/localized-ui";

export default function HomeCarousel({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = carouselSlides[activeIndex];
  const ui = getUi(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";

  function showSlide(index: number) {
    setActiveIndex((index + carouselSlides.length) % carouselSlides.length);
  }

  return (
    <section
      aria-label={ui.carouselLabel}
      aria-roledescription={ui.carouselRole}
      className="hero-carousel"
      dir={direction}
    >
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
        <Link
          className="button button-primary"
          href={localizePath(locale, slide.href)}
        >
          {slide.buttonText[locale]}
        </Link>
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
