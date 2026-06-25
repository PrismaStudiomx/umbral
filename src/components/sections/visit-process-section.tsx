import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/constants/site";
import { visitFlow, visitProcess, visitSignals } from "@/constants/visit-process";

export function VisitProcessSection() {
  const whatsappHref = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(visitProcess.whatsappMessage)}`;

  return (
    <section
      id="visitas"
      className="relative overflow-hidden border-y border-[#181A17]/10 bg-[#E8E1D3]/38 py-20 md:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-8">
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#777064]">
                {visitProcess.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-3xl font-[var(--font-fraunces)] text-[clamp(3rem,6.4vw,5.9rem)] font-semibold leading-[0.88] tracking-[-0.08em] text-[#181A17]">
                {visitProcess.title}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-7 text-[#6F685D] md:text-lg">
                {visitProcess.text}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#181A17] px-6 text-sm font-medium text-[#F4EFE6] transition hover:bg-[#25372F]"
              >
                Preparar visita
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal delay={0.18}>
              <div className="rounded-[2rem] border border-[#181A17]/10 bg-[#F4EFE6]/78 p-5 shadow-[0_30px_90px_rgba(24,26,23,0.07)] md:p-7">
                <div className="mb-7 flex items-center justify-between gap-5 border-b border-[#181A17]/10 pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#777064]">
                      Bitácora de decisión
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[#6F685D]">
                      La visita empieza antes de llegar a la puerta.
                    </p>
                  </div>

                  <div className="hidden rounded-full bg-[#25372F] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#F4EFE6] sm:block">
                    Visita privada
                  </div>
                </div>

                <div className="grid gap-4">
                  {visitFlow.map((item, index) => (
                    <article
                      key={item.title}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-[#181A17]/10 bg-[#E8E1D3]/45 p-5 transition duration-300 hover:bg-[#E8E1D3]/70"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#A45F3D] opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="flex gap-4">
                        <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#181A17]/10 bg-[#F4EFE6] text-[#25372F]">
                          <Check size={15} />
                        </div>

                        <div>
                          <h3 className="font-[var(--font-fraunces)] text-3xl leading-none tracking-[-0.055em] text-[#181A17]">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F685D] md:text-[15px]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <aside className="rounded-[2rem] bg-[#25372F] p-6 text-[#F4EFE6] md:p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C8B9A4]">
                    Lo que cambia
                  </p>

                  <h3 className="mt-5 font-[var(--font-fraunces)] text-4xl leading-[0.95] tracking-[-0.06em]">
                    Menos dudas básicas. Mejores conversaciones.
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-[#E8E1D3]/78 md:text-[15px]">
                    El contacto no llega preguntando desde cero. Llega con una
                    propiedad, una zona y una intención más clara.
                  </p>
                </aside>

                <div className="rounded-[2rem] border border-[#181A17]/10 bg-[#F4EFE6]/78 p-6 md:p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#777064]">
                    Señales visibles
                  </p>

                  <div className="mt-5 grid gap-3">
                    {visitSignals.map((signal) => (
                      <div
                        key={signal}
                        className="flex items-center gap-3 rounded-full border border-[#181A17]/10 bg-[#E8E1D3]/38 px-4 py-3"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#A45F3D] text-[#F4EFE6]">
                          <Check size={13} />
                        </span>

                        <p className="text-sm font-medium text-[#181A17]">
                          {signal}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}