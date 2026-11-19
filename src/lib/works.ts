import worksData from "@/consts/works.json";
import type { WorkItem } from "@/types/works";

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "UTC",
  year: "numeric",
});

export function getWorks(): WorkItem[] {
  return [...worksData.worksExp].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatWorkDate(date: string): string {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export function createWorkKey(work: WorkItem): string {
  return `${work.date}-${work.title}`;
}