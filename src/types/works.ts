export interface WorkItem {
  title: string;
  date: string;
  url: string;
  icon?: string;
}

export interface WorksData {
  worksExp: WorkItem[];
}