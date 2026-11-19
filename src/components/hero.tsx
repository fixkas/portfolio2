import { LogoAscii } from "@/components/logo-ascii";

export function Hero() {
  return (
    <section className="flex items-center gap-2 p-2 sm:p-4">
      <div className="flex min-w-0 flex-col">
        <p className="mb-2 flex items-center gap-0.5 text-base font-semibold sm:text-lg">
          ~$ whoami
        </p>
        <h1 className="mb-2 flex items-center text-balance text-xl font-semibold sm:mb-4 sm:text-2xl lg:text-3xl">
          Hey, I&rsquo;m Kasra - frontend eng.
        </h1>
        <p className="text-base font-semibold tracking-tight text-muted-foreground sm:text-lg lg:text-xl">
          Writing code, breaking things, and learning how computers actually
          work.
        </p>
      </div>
      <div className="shrink-0">
        <LogoAscii className="hidden text-[8px] sm:block sm:text-xs lg:text-sm" />
      </div>
    </section>
  );
}
