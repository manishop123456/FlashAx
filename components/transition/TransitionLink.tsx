"use client";

import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes } from "react";
import { usePageTransition } from "./TransitionContext";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: React.ReactNode;
  };

export function TransitionLink({ href, onClick, children, ...rest }: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (typeof href === "string" && !href.startsWith("#") && !href.startsWith("http")) {
      e.preventDefault();
      navigate(href, { x: e.clientX, y: e.clientY });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
