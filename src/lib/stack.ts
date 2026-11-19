import stackData from "@/consts/stack.json";
import type { StackGroup } from "@/types/stack";

export function getStackGroups(): StackGroup[] {
  return stackData.groups;
}