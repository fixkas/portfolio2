import { CornerPlus } from "@/components/corner-plus";
import { LogoAscii } from "@/components/logo-ascii";

export default function Home() {
  return (
    <div className="relative max-w-4xl w-full h-full mx-auto border-4 border-dashed ">
      <CornerPlus className="-top-3.5 -left-3.5" />
      <CornerPlus className="-top-3.5 -right-3.5" />
      <CornerPlus className="-bottom-3.5 -left-3.5" />
      <CornerPlus className="-bottom-3.5 -right-3.5" />
      <section className="flex p-2 sm:p-4 items-center gap-2">
        <div className="flex flex-col">
          <h3 className="text-lg lg:text-xl flex gap-0.5 items-center mb-2 font-semibold">
            ~$ whoami
          </h3>
          <h1 className="flex items-center text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
            Hey, I{"'"}m Kasra - frontend eng.
          </h1>
          <p className="text-muted-foreground font-semibold text-xl tracking-tighter lg:text-2xl">
            Writing code, breaking things, and learning how computers actually
            work.
          </p>
        </div>
        <div className="shrink-0">
          <LogoAscii className="text-[8px] sm:text-xs lg:text-sm sm:block hidden" />
        </div>
      </section>

      <div className="border-t-4 border-dashed mx-auto w-[97%] h-px" />

      <section className="grid grid-cols-1 ms:grid-cols-2">/bord</section>
    </div>
  );
}
