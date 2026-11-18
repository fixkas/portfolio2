import { LogoAscii } from "@/components/logo-ascii";
import { EventsRoadmap } from "@/components/events-roadmap";
import { WorksList } from "@/components/works-list";

export default function Home() {
  return (
    <main className="relative overflow-hidden overflow-y-scroll max-w-4xl w-full flex-1 mx-auto border-4 border-dashed">
      <section className="flex p-2 sm:p-4 items-center gap-2">
        <div className="flex flex-col">
          <p className="text-lg lg:text-xl flex gap-0.5 items-center mb-2 font-semibold">
            ~$ whoami
          </p>
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

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 px-2 py-4 sm:px-4 md:grid-cols-[1fr_auto_1fr]">
        <WorksList />
        <div className="border-b-4 md:border-r-4 border-dashed" />
        <section aria-labelledby="works-heading" className="min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
              //\|
            </p>
            <h2 id="works-heading" className="text-lg font-semibold sm:text-xl">
              <span className="sr-only">Selected </span>
              [I]
            </h2>
          </div>
        </section>
      </div>

      <div className="border-t-4 border-dashed mx-auto w-[97%] h-px" />
    </main>
  );
}
