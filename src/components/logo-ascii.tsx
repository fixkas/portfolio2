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
  return (
    <pre
      role="img"
      aria-label="Kasra logo"
      className={cn("whitespace-pre leading-none text-foreground", className)}
    >
      {logoAscii.trim()}
    </pre>
  );
}
