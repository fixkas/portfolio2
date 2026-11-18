import worksData from "@/consts/works.json";

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "UTC",
  year: "numeric",
});

export function WorksList() {
  const works = [...worksData.worksExp].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <section aria-labelledby="works-heading" className="min-w-0">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="works-heading" className="text-lg font-semibold sm:text-xl">
          <span className="sr-only">Selected </span>
          [works]
        </h2>
        <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
          /\/
        </p>
      </div>

      {works.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          No projects listed yet.
        </p>
      ) : (
        <ul className="mt-4">
          {works.map((work) => {
            const date = new Date(`${work.date}T00:00:00Z`);

            return (
              <li key={`${work.date}-${work.title}`}>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-1.5 grid min-h-11 touch-manipulation grid-cols-[1rem_minmax(0,1fr)_auto_1.25rem] items-baseline gap-x-2 px-1.5 py-2.5 text-sm leading-6 hover:bg-foreground/80 hover:text-background focus-visible:bg-foreground focus-visible:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="text-center text-muted-foreground group-hover:text-background/60 group-focus-visible:text-background/60"
                  >
                    {work.icon ?? "*"}
                  </span>
                  <span className="min-w-0 truncate" title={work.title}>
                    {work.title}
                  </span>
                  <time
                    dateTime={work.date}
                    className="whitespace-nowrap text-xs tabular-nums text-muted-foreground group-hover:text-background/70 group-focus-visible:text-background/70"
                  >
                    {dateFormatter.format(date)}
                  </time>
                  <span
                    aria-hidden="true"
                    className="justify-self-end whitespace-nowrap text-xs text-muted-foreground group-hover:text-background/70 group-focus-visible:text-background/70"
                  >
                    {"->"}
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
