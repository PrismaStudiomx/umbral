import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/constants/site";

export function ContactFooterSection() {
  const whatsappMessage =
    "Hola, quiero presentar mis propiedades con una página como Umbral. Me interesa recibir información.";

  const whatsappHref = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#181A17] py-16 text-[#F4EFE6] md:py-20"
    >
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[8%] top-[28%] h-px w-[84%] bg-[#F4EFE6]" />
        <div className="absolute left-[8%] top-[62%] h-px w-[84%] bg-[#F4EFE6]" />
        <div className="absolute left-[25%] top-[12%] h-[76%] w-px bg-[#F4EFE6]" />
        <div className="absolute left-[72%] top-[12%] h-[76%] w-px bg-[#F4EFE6]" />
      </div>

      <Container>
        <div className="relative z-10 grid gap-10 border-b border-[#F4EFE6]/12 pb-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#C8B9A4]">
                Contacto rápido
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-4xl font-[var(--font-fraunces)] text-[clamp(3rem,6.4vw,5.9rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[#F4EFE6]">
                Presenta tus propiedades con más intención.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#E8E1D3]/72 md:text-lg">
                Una página clara para mostrar propiedades, ordenar visitas y
                recibir mensajes con mejor contexto desde WhatsApp.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-[2rem] border border-[#F4EFE6]/12 bg-[#F4EFE6]/8 p-5 backdrop-blur-md md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#F4EFE6] text-[#181A17]">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#F4EFE6]">
                    Hablemos por WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-[#E8E1D3]/60">
                    Respuesta directa para revisar tu caso.
                  </p>
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#F4EFE6] px-6 text-sm font-semibold text-[#181A17] transition hover:bg-[#E8E1D3]"
              >
                Escribir por WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="mt-5 text-center text-xs leading-5 text-[#E8E1D3]/50">
                Cuéntanos qué tipo de propiedades manejas y qué necesitas
                mostrar mejor.
              </p>
            </div>
          </Reveal>
        </div>

        <footer className="relative z-10 flex flex-col gap-6 pt-8 text-sm text-[#E8E1D3]/64 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-[#F4EFE6]">
              Umbral — Propiedades con intención
            </p>
            <p className="mt-2 text-xs text-[#E8E1D3]/44">
              Demo conceptual creada por Prisma Studio.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#propiedades" className="transition hover:text-[#F4EFE6]">
              Propiedades
            </a>
            <a href="#zonas" className="transition hover:text-[#F4EFE6]">
              Zonas
            </a>
            <a href="#visitas" className="transition hover:text-[#F4EFE6]">
              Visitas
            </a>
            <a href="#contacto" className="transition hover:text-[#F4EFE6]">
              WhatsApp
            </a>
          </nav>
        </footer>
      </Container>
    </section>
  );
}