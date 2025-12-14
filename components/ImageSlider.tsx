"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sliderImages = [
  {
    src: "/slider/IMG-3686f01c550bd6d4918b0cf3956e45f8-V.jpg",
    alt: "Bermet Brka - Slika 1",
  },
  {
    src: "/slider/IMG-78103c60c26c410c1675b13114db2200-V.jpg",
    alt: "Bermet Brka - Slika 2",
  },
  {
    src: "/slider/IMG-d5d1815f72c65dc803da8baced739a1e-V.jpg",
    alt: "Bermet Brka - Slika 3",
  },
  {
    src: "/slider/IMG-f6f95b32d8a224f029daba1371a78893-V.jpg",
    alt: "Bermet Brka - Slika 4",
  },
];

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % sliderImages.length);
  }, []);

  const prevLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Embla Container */}
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 relative cursor-pointer md:px-2"
                style={{ height: "400px" }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Navigation - Only on mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-[60] bg-background/20 hover:bg-background/40 text-white border-white/20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] bg-background/20 hover:bg-background/40 text-white border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] bg-background/20 hover:bg-background/40 text-white border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sliderImages[lightboxIndex].src}
              alt={sliderImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            {lightboxIndex + 1} / {sliderImages.length}
          </div>
        </div>
      )}
    </>
  );
}
