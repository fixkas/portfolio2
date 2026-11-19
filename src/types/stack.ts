export interface StackItem {
  name: string;
  note?: string;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

export interface StackData {
  groups: StackGroup[];
}