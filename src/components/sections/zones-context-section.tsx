import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { AbstractZoneMap } from "@/components/visual/abstract-zone-map";
import { zoneContextCards, zonePoints } from "@/constants/zones";

export function ZonesContextSection() {
  return (
    <section
      id="zonas"
      className="relative overflow-hidden bg-[#F4EFE6] py-18 md:py-24"
    >
      <Container>
        <div className="mb-12 md:mb-16">
  <Reveal>
    <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#777064]">
      Zonas y contexto
    </p>
  </Reveal>

  <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
    <Reveal delay={0.08}>
      <h2 className="max-w-4xl font-[var(--font-fraunces)] text-[clamp(3rem,6.4vw,5.9rem)] font-semibold leading-[0.88] tracking-[-0.08em] text-[#181A17]">
  La zona también decide la visita.
</h2>
    </Reveal>

    <Reveal delay={0.16}>
      <p className="max-w-md text-base leading-7 text-[#6F685D] md:text-lg">
  Zona, servicios y conectividad aparecen antes de agendar para entender mejor cada propiedad.
</p>
    </Reveal>
  </div>
</div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <Reveal delay={0.18}>
            <AbstractZoneMap />
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.22}>
              <div className="rounded-[2rem] border border-[#181A17]/10 bg-[#E8E1D3]/48 p-6 md:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#25372F] text-[#F4EFE6]">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#777064]">
                      Lectura de zona
                    </p>
                    <p className="mt-1 text-sm text-[#181A17]">
                      Contexto antes de agendar.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {zonePoints.map((zone) => (
                    <article
                      key={zone.id}
                      className="rounded-[1.25rem] border border-[#181A17]/10 bg-[#F4EFE6]/70 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-[var(--font-fraunces)] text-2xl leading-none tracking-[-0.05em] text-[#181A17]">
                            {zone.name}
                          </h3>
                          <p className="mt-2 text-sm text-[#777064]">
                            {zone.description}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-[#25372F] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#F4EFE6]">
                          {zone.label}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {zone.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-[#181A17]/10 px-3 py-1 text-xs text-[#6F685D]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {zoneContextCards.map((card, index) => (
            <Reveal key={card.title} delay={0.12 + index * 0.04}>
              <article className="h-full rounded-[1.5rem] border border-[#181A17]/10 bg-[#E8E1D3]/40 p-5">
                <p className="font-[var(--font-fraunces)] text-2xl leading-none tracking-[-0.05em] text-[#181A17]">
                  {card.title}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#6F685D]">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}