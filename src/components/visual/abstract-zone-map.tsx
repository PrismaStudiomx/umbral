import { zonePoints } from "@/constants/zones";

export function AbstractZoneMap() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#181A17]/10 bg-[#25372F] p-5 text-[#F4EFE6] shadow-[0_30px_90px_rgba(24,26,23,0.12)] md:p-7">
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute left-[10%] top-[18%] h-px w-[78%] bg-[#F4EFE6]" />
        <div className="absolute left-[16%] top-[34%] h-px w-[66%] bg-[#F4EFE6]" />
        <div className="absolute left-[8%] top-[58%] h-px w-[82%] bg-[#F4EFE6]" />
        <div className="absolute left-[24%] top-[12%] h-[78%] w-px bg-[#F4EFE6]" />
        <div className="absolute left-[52%] top-[16%] h-[70%] w-px bg-[#F4EFE6]" />
        <div className="absolute left-[76%] top-[22%] h-[60%] w-px bg-[#F4EFE6]" />
      </div>

      <div className="absolute inset-8 rounded-[1.5rem] border border-[#F4EFE6]/10" />
      <div className="absolute left-[14%] top-[16%] h-[68%] w-[72%] rounded-[50%] border border-[#F4EFE6]/10" />
      <div className="absolute left-[28%] top-[28%] h-[42%] w-[44%] rounded-[50%] border border-[#F4EFE6]/10" />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#C8B9A4]">
            Mapa de contexto
          </p>
          <h3 className="mt-4 max-w-sm font-[var(--font-fraunces)] text-4xl leading-[0.94] tracking-[-0.06em] md:text-5xl">
            La zona también cuenta la historia.
          </h3>
        </div>

        <div className="hidden rounded-full border border-[#F4EFE6]/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#E8E1D3]/80 sm:block">
          Sin mapa genérico
        </div>
      </div>

      {zonePoints.map((point) => (
        <div
          key={point.id}
          className="group absolute z-20"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
        >
          <div className="relative">
            <div className="size-4 rounded-full border border-[#F4EFE6] bg-[#A45F3D] shadow-[0_0_0_8px_rgba(164,95,61,0.18)]" />

            <div className="pointer-events-none absolute left-5 top-1/2 w-[210px] -translate-y-1/2 rounded-[1rem] border border-[#F4EFE6]/12 bg-[#181A17]/82 p-3 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
              <p className="text-xs font-semibold text-[#F4EFE6]">
                {point.name}
              </p>
              <p className="mt-1 text-[11px] leading-5 text-[#C8B9A4]">
                {point.label}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.5rem] border border-[#F4EFE6]/10 bg-[#181A17]/45 p-4 backdrop-blur-md md:bottom-7 md:left-7 md:right-7">
        <div className="grid gap-3 sm:grid-cols-2">
          {zonePoints.slice(0, 2).map((point) => (
            <div key={point.id}>
              <p className="text-sm font-medium text-[#F4EFE6]">
                {point.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#E8E1D3]/68">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}