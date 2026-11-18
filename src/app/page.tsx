import { DashedDivider } from "@/components/dashed-divider";
import { Hero } from "@/components/hero";
import { StackList } from "@/components/stack-list";
import { WorksList } from "@/components/works-list";

export default function Home() {
  return (
    <main
      id="main-content"
      className="relative mx-auto w-full max-w-4xl flex-1 overflow-hidden overflow-y-auto border-4 border-dashed"
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
    </main>
  );
}
