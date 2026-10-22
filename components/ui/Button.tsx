import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";
type Icon = "up-right" | "down" | "right" | "none";

const ICONS = { "up-right": ArrowUpRight, down: ArrowDown, right: ArrowRight } as const;

function classes(variant: Variant, size: Size, block?: boolean, extra?: string) {
  return ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : "", block ? "btn--block" : "", extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  block?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

function Glyph({ icon }: { icon: Icon }) {
  if (icon === "none") return null;
  const Cmp = ICONS[icon];
  return <Cmp aria-hidden="true" strokeWidth={2.25} />;
}

/** Link styled as a button (valid HTML: no <button> nested in <a>). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon = "up-right",
  block,
  className,
  onClick,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} onClick={onClick} className={classes(variant, size, block, className)}>
      {children}
      <Glyph icon={icon} />
    </Link>
  );
}

/** Real <button> for in-page actions (form steps, toggles). */
export function Button({
  variant = "primary",
  size = "md",
  icon = "none",
  block,
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  return (
    <button type={type} className={classes(variant, size, block, className)} {...rest}>
      {children}
      <Glyph icon={icon} />
    </button>
  );
}