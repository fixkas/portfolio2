import stackData from "@/consts/stack.json";

export function StackList() {
  const { groups } = stackData;

  return (
    <section aria-labelledby="stack-heading" className="min-w-0">
      <div className="flex items-baseline justify-between gap-4">
        <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {"//\\|"}
        </p>
        <h2 id="stack-heading" className="text-lg font-semibold sm:text-xl">
          <span className="sr-only">Stack </span>
          [I]
        </h2>
      </div>

      <div className="mt-4 grid max-h-64 grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:max-h-[165px] sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="px-1.5 text-xs text-muted-foreground">
              [{group.label}]
            </h3>
            <ul className="mt-1">
              {group.items.map((item) => {
                const note = "note" in item ? item.note : undefined;

                return (
                  <li
                    key={item.name}
                    className="grid cursor-default grid-cols-[1rem_minmax(0,1fr)] items-baseline gap-x-2 px-1.5 py-1 text-sm leading-6 hover:text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="text-center text-muted-foreground"
                    >
                      &gt;
                    </span>
                    <span className="min-w-0 break-words">
                      {item.name}
                      {typeof note === "string" && note ? (
                        <span className="text-muted-foreground">
                          {" "}
                          <span aria-hidden="true">·</span> {note}
                        </span>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
