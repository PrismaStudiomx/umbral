import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { PropertyCard } from "@/components/property/property-card";
import { properties } from "@/constants/properties";

export function FeaturedPropertiesSection() {
  const [mainProperty, secondProperty, thirdProperty, fourthProperty] =
    properties;

  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] py-20 md:py-28">
      <Container>
        <div className="mb-12 md:mb-16">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#777064]">
              Propiedades destacadas
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="max-w-4xl font-[var(--font-fraunces)] text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[#181A17]">
              No todas las propiedades merecen la misma presentación.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#6F685D] md:text-lg">
              Cada propiedad se presenta con la jerarquía, el contexto y la
              intención de visita que necesita.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
  <Reveal delay={0.18}>
    <PropertyCard property={mainProperty} variant="large" />
  </Reveal>

  <div className="grid gap-6 lg:pt-10">
    <Reveal delay={0.24}>
      <PropertyCard property={secondProperty} variant="medium" />
    </Reveal>

    <Reveal delay={0.3}>
      <PropertyCard property={thirdProperty} variant="compact" />
    </Reveal>
  </div>
</div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
  <Reveal delay={0.18}>
    <aside className="rounded-[2rem] border border-[#1E2A24]/10 bg-[#25372F] p-6 text-[#F4EFE6] shadow-[0_24px_70px_rgba(24,26,23,0.08)] md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#C8B9A4]">
          Criterio editorial
        </p>

        <h3 className="mt-5 max-w-sm font-[var(--font-fraunces)] text-4xl leading-[0.96] tracking-[-0.06em] md:text-[2.9rem]">
          Fotos, datos y zona en una misma decisión.
        </h3>
      </div>

      <div className="mt-8 grid gap-4 border-t border-[#F4EFE6]/10 pt-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#C8B9A4]">
            Mirar
          </p>
          <p className="mt-1 text-sm leading-6 text-[#E8E1D3]/82">
            Primero la atmósfera, la zona y el tipo de propiedad.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#C8B9A4]">
            Filtrar
          </p>
          <p className="mt-1 text-sm leading-6 text-[#E8E1D3]/82">
            Después los datos que realmente ayudan a decidir.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#C8B9A4]">
            Visitar
          </p>
          <p className="mt-1 text-sm leading-6 text-[#E8E1D3]/82">
            Así la visita empieza con más intención y menos ruido.
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-sm text-sm leading-7 text-[#E8E1D3]/78 md:text-[15px]">
        No se trata de mostrar más propiedades, sino de presentar mejor
        las que sí vale la pena visitar.
      </p>
    </aside>
  </Reveal>

  <Reveal delay={0.24} className="lg:self-start">
    <PropertyCard property={fourthProperty} variant="medium" />
  </Reveal>
</div>
      </Container>
    </section>
  );
}