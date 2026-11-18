import { DashedDivider } from "@/components/dashed-divider";
import { Hero } from "@/components/hero";
import { StackList } from "@/components/stack-list";
import { WorksList } from "@/components/works-list";

export default function Home() {
  return (
    <main
      id="main-content"
      className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden overflow-y-auto border-4 border-dashed"
    >
      <Hero />
      <DashedDivider />
      <div className="grid grid-cols-1 gap-4 px-2 py-4 sm:gap-6 sm:px-4 md:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <WorksList />
        <div
          aria-hidden="true"
          className="border-b-4 border-dashed md:border-b-0 md:border-r-4"
        />
        <StackList />
      </div>
      <DashedDivider />
      <section className="flex min-h-0 flex-1">graph</section>
      <DashedDivider />
      <footer className="flex shrink-0 items-center justify-between gap-4 px-2 py-3 text-xs text-muted-foreground sm:px-4 sm:text-sm">
        <p className="cursor-default">
          {"$ echo \"end of file\"".split(" ").map((word, i, arr) => (
            <span key={i}>
              <span className="hover:text-primary">{word}</span>
              {i < arr.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <a
          href="https://github.com/fixkas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          [GitHub]
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </main>
  );
}
