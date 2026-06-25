import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Property } from "@/constants/properties";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  property: Property;
  variant?: "large" | "medium" | "compact";
  className?: string;
};

export function PropertyCard({
  property,
  variant = "medium",
  className,
}: PropertyCardProps) {
  const isLarge = variant === "large";
  const isCompact = variant === "compact";
  const hasGallery = isLarge && property.details && property.details.length > 0;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#181A17]/10 bg-[#F4EFE6]/72 shadow-[0_24px_70px_rgba(24,26,23,0.06)]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-[#C8B9A4]",
          isLarge && "aspect-[4/3] md:aspect-[16/10]",
          !isLarge && !isCompact && "aspect-[4/3]",
          isCompact && "aspect-[16/10]"
        )}
      >
        <Image
          src={property.image}
          alt={`${property.name}, ${property.zone}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          sizes={
            isLarge
              ? "(min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1024px) 34vw, 100vw"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#181A17]/55 via-[#181A17]/10 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#F4EFE6]/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#181A17] backdrop-blur-md">
            {property.code}
          </span>

          <span className="rounded-full bg-[#25372F]/88 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6] backdrop-blur-md">
            {property.operation}
          </span>
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col p-5 md:p-6", isLarge && "md:p-7")}>
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3
              className={cn(
                "font-[var(--font-fraunces)] font-semibold leading-none tracking-[-0.055em] text-[#181A17]",
                isLarge ? "text-4xl md:text-5xl" : "text-[2rem] md:text-[2.25rem]"
              )}
            >
              {property.name}
            </h3>

            <p className="mt-2 text-sm text-[#777064] md:text-[15px]">
              {property.zone}
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#181A17]/10 text-[#181A17] transition duration-300 group-hover:bg-[#181A17] group-hover:text-[#F4EFE6]"
            aria-label={`Ver propiedad ${property.name}`}
          >
            <ArrowUpRight size={17} />
          </a>
        </div>

        <p
          className={cn(
            "mt-5 max-w-xl leading-6 text-[#6F685D]",
            isLarge ? "text-[15px]" : "text-sm md:text-[14px]"
          )}
        >
          {property.description}
        </p>

        {hasGallery && (
          <div className="mt-7 rounded-[1.5rem] border border-[#181A17]/10 bg-[#E8E1D3]/45 p-3 md:mt-8 md:p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#777064]">
                Recorrido visual
              </p>

              <p className="hidden text-xs text-[#777064] sm:block">
                Tres momentos antes de la visita.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {property.details?.map((item) => (
                <div
                  key={item.label}
                  className="group/detail relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#C8B9A4]"
                >
                  <Image
                    src={item.image}
                    alt={`${property.name} — ${item.label}`}
                    fill
                    className="object-cover transition duration-700 group-hover/detail:scale-[1.04]"
                    sizes="(min-width: 1024px) 180px, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#181A17]/45 via-transparent to-transparent" />

                  <span className="absolute bottom-2 left-2 rounded-full bg-[#181A17]/72 px-3 py-1 text-[10px] font-medium text-[#F4EFE6] backdrop-blur-md">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={cn(
            "border-t border-[#181A17]/10 pt-5",
            hasGallery ? "mt-7" : "mt-5",
            isLarge
              ? "grid gap-4 sm:grid-cols-4"
              : "grid grid-cols-2 gap-x-4 gap-y-3"
          )}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#777064]">
              Precio
            </p>
            <p className="mt-1 text-sm font-semibold tracking-[-0.03em] text-[#181A17]">
              {property.price}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#777064]">
              Área
            </p>
            <p className="mt-1 text-sm font-medium text-[#181A17]">
              {property.area}
            </p>
          </div>

          {property.bedrooms && (
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#777064]">
                Recámaras
              </p>
              <p className="mt-1 text-sm font-medium text-[#181A17]">
                {property.bedrooms}
              </p>
            </div>
          )}

          {property.bathrooms && (
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#777064]">
                Baños
              </p>
              <p className="mt-1 text-sm font-medium text-[#181A17]">
                {property.bathrooms}
              </p>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-[#181A17]/10 pt-5 sm:flex-row">
          <a
            href="#recorrido"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#181A17] px-5 text-sm font-medium text-[#F4EFE6] transition hover:bg-[#25372F]"
          >
            Ver propiedad
          </a>

          <a
            href="#contacto"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#181A17]/12 px-5 text-sm font-medium text-[#181A17] transition hover:bg-[#E8E1D3]"
          >
            Visita privada
          </a>
        </div>
      </div>
    </article>
  );
}