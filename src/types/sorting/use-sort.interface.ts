import { Sort } from "./sort.type";

export interface IUseSort<T extends object> {
  sort: Sort<T>;
  setSort: (sort: Sort<T>) => void;
}
