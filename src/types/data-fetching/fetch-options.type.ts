import { AxiosRequestConfig, Method } from "axios";
import { Pagination } from "../pagination/pagination.type";
import { Sort } from "../sorting";
import { Filter } from "../filters/filter.type";

export interface FetchOptions<T extends Object = Object> {
  url: string;
  body?: Object;
  method?: Method;
  params?: Record<string, unknown>;
  options?: Omit<AxiosRequestConfig, "url" | "data" | "method" | "params">;

  // Pagination
  pagination?: Pagination;
  sort?: Sort<T>;
  filters?: Filter;
}
