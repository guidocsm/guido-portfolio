"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ProjectImage } from "@/lib/projects"
import { IPhoneFrame, MacBookFrame, TerminalFrame, WireframeFrame } from "@/components/device-frame"

function DeviceImage({ image }: { image: ProjectImage }) {
  if (image.type === "terminal") {
    return <TerminalFrame src={image.src} alt={image.alt} />
  }
  if (image.type === "wireframe") {
    return <WireframeFrame src={image.src} alt={image.alt} />
  }
  if (image.type === "mobile") {
    return <IPhoneFrame src={image.src} alt={image.alt} />
  }
  return <MacBookFrame src={image.src} alt={image.alt} />
}

export function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  if (images.length === 0) return null

  const currentImage = images[current]
  const isWide = currentImage.type === "desktop" || currentImage.type === "wireframe"

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <div className="overflow-hidden rounded-xl bg-secondary/50">
      {/* Carousel viewport */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${
          isWide ? "min-h-[340px] sm:min-h-[460px]" : "min-h-[420px] sm:min-h-[520px]"
        }`}
      >
        {/* Prev button */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label="Previous image"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Image area */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex items-center justify-center px-14 py-8"
          >
            <DeviceImage image={currentImage} />
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label="Next image"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex items-center justify-center gap-3 pb-5">
        <span className="text-xs text-muted-foreground">
          {current + 1} / {images.length}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="border-t border-border px-6 py-3">
        <p className="text-center text-xs text-muted-foreground">
          {currentImage.alt}
        </p>
      </div>
    </div>
  )
}
