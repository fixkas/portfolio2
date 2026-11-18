import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function CornerPlus({ className }: { className?: string }) {
  return (
    <Plus
      aria-hidden="true"
      strokeWidth={3}
      className={cn(
        "pointer-events-none absolute size-5 text-foreground",
        className,
      )}
    />
  );
}
