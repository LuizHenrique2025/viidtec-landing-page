import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker ? (
        <p className="mb-3 font-mono text-sm text-signal-300">{kicker}</p>
      ) : null}
      <h2 className="text-balance text-3xl leading-[1.1] sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-mist-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
