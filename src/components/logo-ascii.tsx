"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export const logoAscii = `
⣿⠿⠿⠛⠛⠛⠟⠿⠻⣿⣿⡿⠿⠿⠛⠛⠛⠛⠿⢿
⣷⣴⣾⠿⠿⠿⣷⢶⢾⣿⣿⡿⢶⡶⠿⠻⠛⣿⣶⣽
⣿⣿⣏⠶⠀⠀⠭⢺⣺⣿⣿⣧⣺⠧⠄⠀⡰⢛⣽⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⢏⣾⣿
⣿⣿⣿⣿⣿⠻⠿⠿⠿⠿⠿⠿⢛⣛⣭⣾⣿⣸⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿
`;

export function LogoAscii({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<{ r: number; c: number } | null>(null);
  const rows = logoAscii.trim().split("\n");

  return (
    <pre
      role="img"
      aria-label="Kasra logo"
      className={cn(
        "logo-ascii whitespace-pre leading-none text-foreground",
        className,
      )}
      onPointerLeave={() => setHovered(null)}
    >
      {rows.map((row, r) => (
        <span key={r}>
          {Array.from(row).map((char, c) => {
            const active = hovered !== null;
            const primary =
              hovered !== null &&
              ((hovered.r === r && hovered.c === c) ||
                (hovered.r === r && Math.abs(hovered.c - c) === 1) ||
                (hovered.c === c && Math.abs(hovered.r - r) === 1));

            return (
              <span
                key={c}
                aria-hidden="true"
                className={cn(
                  "logo-dot",
                  active && (primary ? "text-primary" : "text-accent"),
                )}
                onPointerEnter={() => setHovered({ r, c })}
              >
                {char}
              </span>
            );
          })}
          {r < rows.length - 1 ? "\n" : null}
        </span>
      ))}
    </pre>
  );
}
