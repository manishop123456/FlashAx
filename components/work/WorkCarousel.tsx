"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioProjectData } from "@/lib/portfolioData";
import { WorkImagePlaceholder } from "./WorkImagePlaceholder";

interface WorkCarouselProps {
  project: PortfolioProjectData;
}

export function WorkCarousel({ project }: WorkCarouselProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = project.images;
  const currentImage = images[activeImageIndex] || images[0];
  const isCurrentFailed = !!failedImages[currentImage?.src];

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handleImageError = (src: string) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div
      ref={carouselRef}
      className="work-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project.title} gallery`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Large Display Frame */}
      <div className="work-carousel__stage">
        <div className="work-carousel__viewport">
          {!isCurrentFailed ? (
            <div className="work-carousel__image-wrap">
              <Image
                key={`${project.id}-${currentImage.src}`}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority={activeImageIndex === 0}
                sizes="(max-width: 900px) 100vw, 55vw"
                className="work-carousel__img"
                style={currentImage.objectPosition ? { objectPosition: currentImage.objectPosition } : undefined}
                onError={() => handleImageError(currentImage.src)}
              />
            </div>
          ) : (
            <WorkImagePlaceholder
              image={currentImage}
              projectTitle={project.title}
              isThumbnail={false}
            />
          )}
        </div>

        {/* Minimal Previous and Next Controls */}
        <button
          type="button"
          className="work-carousel__nav-btn work-carousel__nav-btn--prev"
          onClick={handlePrev}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="work-carousel__nav-btn work-carousel__nav-btn--next"
          onClick={handleNext}
          aria-label="Next photograph"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Small, Unnumbered Supporting Thumbnails */}
      <div
        className="work-carousel__thumbs-strip"
        role="tablist"
        aria-label={`${project.title} photos`}
      >
        {images.map((img, idx) => {
          const isActive = idx === activeImageIndex;
          const isFailed = !!failedImages[img.src];

          return (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`View photo ${idx + 1}`}
              className={`work-carousel__thumb ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveImageIndex(idx)}
            >
              <div className="work-carousel__thumb-inner">
                {!isFailed ? (
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="120px"
                    className="work-carousel__thumb-img"
                    style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                    onError={() => handleImageError(img.src)}
                  />
                ) : (
                  <WorkImagePlaceholder
                    image={img}
                    projectTitle={project.title}
                    isThumbnail={true}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
