export function Footer() {
  return (
    <footer className="flex shrink-0 items-center justify-between gap-4 px-2 py-3 text-xs text-muted-foreground sm:px-4 sm:text-sm">
      <p aria-hidden="true" className="cursor-default">
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
        className="hover:text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
      >
        [GitHub]
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </footer>
  );
}