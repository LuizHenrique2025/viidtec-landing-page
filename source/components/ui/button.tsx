import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-normal text-center min-h-11";

const variants = {
  primary: "bg-signal text-white hover:bg-signal-600 px-5 py-3",
  secondary:
    "border border-ink-600 text-mist-100 hover:border-mist-400 hover:bg-ink-800 px-5 py-3",
  ghost: "text-mist-200 hover:text-signal px-3 py-2",
};

type Variant = keyof typeof variants;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: Variant;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, ...rest } = props;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], className)}
        {...anchorRest}
      />
    );
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...(rest as ButtonAsButton)}
    />
  );
}


