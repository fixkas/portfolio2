import { ContributionChart } from "@/components/contribution-chart";
import { DashedDivider } from "@/components/dashed-divider";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { StackList } from "@/components/stack-list";
import { WorksList } from "@/components/works-list";
import { getGithubContributions } from "@/lib/github-contributions";
import { getWorks } from "@/lib/works";
import { getStackGroups } from "@/lib/stack";

export default async function Home() {
  const works = getWorks();
  const groups = getStackGroups();
  const contributions = await getGithubContributions();

  return (
    <main
      id="main-content"
      className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden overflow-y-auto border-4 border-dashed overscroll-behavior-contain"
    >
      <Hero />
      <DashedDivider />
      <div className="grid grid-cols-1 gap-4 px-2 py-4 sm:gap-6 sm:px-4 md:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <WorksList works={works} />
        <div
          aria-hidden="true"
          className="border-b-4 border-dashed md:border-b-0 md:border-r-4"
        />
        <StackList groups={groups} />
      </div>
      <DashedDivider />
      <section
        className="relative flex min-h-0 flex-1 flex-col px-2 py-4 sm:px-4"
        aria-labelledby="graph-heading"
      >
        <h2 id="graph-heading" className="text-center">
          [GitHub contributions]
        </h2>
        <ContributionChart data={contributions} />
      </section>
      <DashedDivider />
      <Footer />
    </main>
  );
}
