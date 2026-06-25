"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { featuredProperty } from "@/constants/properties";
import { editorialEase } from "@/lib/animations";

const propertyDetails = featuredProperty.details ?? [];

const galleryImages = [
  {
    label: "Fachada",
    image: featuredProperty.image,
  },
  ...propertyDetails,
];

export function PropertyMediaShowcase() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setActiveImage(index);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const goToPrevious = () => {
    if (activeImage === null) return;

    setActiveImage((current) => {
      if (current === null) return 0;
      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  };

  const goToNext = () => {
    if (activeImage === null) return;

    setActiveImage((current) => {
      if (current === null) return 0;
      return current === galleryImages.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => openImage(0)}
          className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#C8B9A4] text-left"
          aria-label="Ver imagen principal en grande"
        >
          <Image
            src={featuredProperty.image}
            alt={`${featuredProperty.name}, ${featuredProperty.zone}`}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#181A17]/32 via-transparent to-transparent" />
        </button>

        <div className="pointer-events-none absolute bottom-5 left-5 right-5 md:left-auto md:w-[360px]">
          <div className="pointer-events-auto rounded-[1.4rem] border border-[#F4EFE6]/25 bg-[#181A17]/84 p-4 text-[#F4EFE6] shadow-2xl backdrop-blur-md md:p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C8B9A4]">
                  {featuredProperty.code}
                </p>

                <h2 className="mt-1 font-[var(--font-fraunces)] text-2xl leading-none tracking-[-0.04em] md:text-3xl">
                  {featuredProperty.name}
                </h2>

                <p className="mt-2 text-xs text-[#E8E1D3]/70 md:text-sm">
                  {featuredProperty.zone}
                </p>
              </div>

              <span className="rounded-full bg-[#A45F3D] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F4EFE6]">
                Disponible
              </span>
            </div>

            <div className="mt-4 border-t border-[#F4EFE6]/12 pt-4">
              <p className="text-lg font-semibold tracking-[-0.03em]">
                {featuredProperty.price}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#E8E1D3]/72 md:text-sm">
                <span>{featuredProperty.area}</span>
                <span>·</span>
                <span>{featuredProperty.bedrooms}</span>
                <span>·</span>
                <span>{featuredProperty.bathrooms}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openImage(0)}
              className="mt-4 inline-flex w-full items-center justify-between rounded-full bg-[#F4EFE6] px-4 py-3 text-sm font-medium text-[#181A17] transition hover:bg-[#E8E1D3]"
            >
              Ver recorrido
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 md:mt-7 md:gap-4">
        {propertyDetails.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => openImage(index + 1)}
            className="group relative aspect-[5/4] overflow-hidden rounded-[1.25rem] bg-[#C8B9A4] text-left md:aspect-[4/3]"
            aria-label={`Ver imagen de ${item.label} en grande`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 180px, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#181A17]/45 via-transparent to-transparent opacity-80" />

            <span className="absolute bottom-2 left-2 rounded-full bg-[#181A17]/72 px-3 py-1.5 text-[11px] font-medium text-[#F4EFE6] backdrop-blur-md">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#181A17]/92 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: editorialEase }}
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-4 top-4 z-20 inline-flex size-11 items-center justify-center rounded-full bg-[#F4EFE6] text-[#181A17] transition hover:bg-[#E8E1D3] md:right-8 md:top-8"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 z-20 inline-flex size-11 items-center justify-center rounded-full bg-[#F4EFE6]/90 text-[#181A17] transition hover:bg-[#F4EFE6] md:left-8"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 z-20 inline-flex size-11 items-center justify-center rounded-full bg-[#F4EFE6]/90 text-[#181A17] transition hover:bg-[#F4EFE6] md:right-8"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={galleryImages[activeImage].image}
              className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-[#C8B9A4] md:h-[84vh] md:rounded-[2rem]"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.45, ease: editorialEase }}
            >
              <Image
                src={galleryImages[activeImage].image}
                alt={galleryImages[activeImage].label}
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#181A17]/75 to-transparent p-5 text-[#F4EFE6] md:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8B9A4]">
                  {featuredProperty.code}
                </p>
                <p className="mt-2 font-[var(--font-fraunces)] text-3xl tracking-[-0.05em] md:text-5xl">
                  {galleryImages[activeImage].label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}