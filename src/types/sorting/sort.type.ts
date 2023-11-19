import { SortOrder } from "./sort-order.enum";

export type Sort<T extends Object> = [keyof T, SortOrder][];