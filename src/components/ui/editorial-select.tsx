import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type EditorialSelectProps = {
  label: string;
  options: string[];
  className?: string;
};

export function EditorialSelect({
  label,
  options,
  className,
}: EditorialSelectProps) {
  return (
    <label
      className={cn(
        "group relative block rounded-[1.35rem] border border-[#181A17]/10 bg-[#F4EFE6]/62 px-4 py-4 transition duration-300 hover:border-[#181A17]/20 hover:bg-[#F4EFE6]",
        className
      )}
    >
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-[#777064]">
        {label}
      </span>

      <div className="relative">
        <select
          className="w-full appearance-none bg-transparent pr-8 text-base font-medium tracking-[-0.03em] text-[#181A17] outline-none"
          defaultValue={options[0]}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#777064] transition group-hover:text-[#181A17]"
        />
      </div>
    </label>
  );
}