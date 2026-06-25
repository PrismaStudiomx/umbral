import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PropertyMediaShowcase } from "@/components/property/property-media-showcase";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-5">
      <Container>
        <header className="flex items-center justify-between border-b border-[#181A17]/10 pb-5">
          <a
            href="#"
            className="inline-flex items-baseline gap-2 text-sm font-semibold tracking-[-0.03em]"
          >
            <span>Umbral</span>
            <span className="hidden text-xs font-normal text-[#777064] sm:inline">
              Propiedades con intención
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#181A17]/64 md:flex">
            <a href="#propiedades" className="transition hover:text-[#181A17]">
              Propiedades
            </a>
            <a href="#zonas" className="transition hover:text-[#181A17]">
              Zonas
            </a>
            <a href="#visitas" className="transition hover:text-[#181A17]">
              Visitas
            </a>
          </nav>

          <a
            href="#contacto"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#181A17]/12 bg-[#F4EFE6]/55 px-4 text-sm text-[#181A17] transition hover:border-[#181A17]/30 hover:bg-[#181A17] hover:text-[#F4EFE6]"
          >
            Solicitar visita
            <ArrowUpRight size={15} />
          </a>
        </header>

        <div className="grid min-h-[calc(100vh-78px)] items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-14">
          <div>
            <Reveal>
              <p className="mb-6 max-w-max text-xs uppercase tracking-[0.24em] text-[#777064]">
                Propiedades presentadas con contexto
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-[780px] font-[var(--font-fraunces)] text-[clamp(4.4rem,11vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.085em] text-[#181A17]">
                Encuentra el lugar antes de visitarlo.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[430px] text-base leading-7 text-[#777064] md:text-lg">
                Fotos, datos y zona reunidos para llegar a la visita con más
                claridad.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#propiedades">Ver propiedades</Button>
                <Button href="#contacto" variant="secondary">
                  Solicitar visita
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-14 grid max-w-2xl gap-4 border-t border-[#181A17]/10 pt-6 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777064]">
                    Recorrido
                  </p>
                  <p className="mt-2 font-medium">Fotos, datos y zona</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777064]">
                    Intención
                  </p>
                  <p className="mt-2 font-medium">Llegar con claridad</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777064]">
                    Contacto
                  </p>
                  <p className="mt-2 font-medium">Visita por WhatsApp</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <PropertyMediaShowcase />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}