import { ArrowUpRight, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EditorialSelect } from "@/components/ui/editorial-select";
import { Reveal } from "@/components/motion/reveal";
import { searchOptions } from "@/constants/search-options";

export function EditorialSearchSection() {
  return (
    <section
      id="propiedades"
      className="relative overflow-hidden border-y border-[#181A17]/10 bg-[#E8E1D3]/38 py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#777064]">
                Selección guiada
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-xl font-[var(--font-fraunces)] text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#181A17]">
                Empieza por lo que realmente importa.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-7 text-[#777064]">
                Define intención, zona y presupuesto para revisar opciones con
                más claridad y menos ruido.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="rounded-[2rem] border border-[#181A17]/10 bg-[#F4EFE6]/74 p-4 shadow-[0_30px_90px_rgba(24,26,23,0.07)] backdrop-blur md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#181A17]/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#777064]">
                    Búsqueda privada
                  </p>
                  <p className="mt-2 text-sm text-[#181A17]/68">
                    Una solicitud clara antes de abrir conversación.
                  </p>
                </div>

                <div className="hidden size-11 items-center justify-center rounded-full bg-[#25372F] text-[#F4EFE6] sm:flex">
                  <Search size={18} />
                </div>
              </div>

              <form className="grid gap-3 md:grid-cols-2">
                <EditorialSelect
                  label="Quiero"
                  options={searchOptions.operations}
                />

                <EditorialSelect label="Zona" options={searchOptions.zones} />

                <EditorialSelect
                  label="Presupuesto"
                  options={searchOptions.budgets}
                />

                <EditorialSelect
                  label="Tipo de propiedad"
                  options={searchOptions.propertyTypes}
                />

                <EditorialSelect
                  label="Recámaras"
                  options={searchOptions.bedrooms}
                />

                <button
                  type="button"
                  className="group flex min-h-[78px] items-center justify-between rounded-[1.35rem] bg-[#181A17] px-5 py-4 text-left text-[#F4EFE6] transition duration-300 hover:bg-[#25372F]"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C8B9A4]">
                      Selección
                    </span>
                    <span className="mt-2 block text-base font-medium tracking-[-0.03em]">
                      Ver propiedades
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>

              <p className="mt-5 border-t border-[#181A17]/10 pt-5 text-sm leading-6 text-[#777064]">
                Te mostraremos una selección más afín a lo que estás buscando.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}