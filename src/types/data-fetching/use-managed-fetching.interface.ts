import {
  QueryObserverResult,
  RefetchOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { PaginatedResponse } from "./paginated-response.type";
import { IUsePagination } from "../pagination/use-pagination.interface";
import { IUseSort } from "../sorting/use-sort.interface";
import { Filter } from "../filters/filter.type";

export interface IUseManagedFetching<T extends object> {
  data: T[];
  refetch: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<AxiosResponse<PaginatedResponse<T>, any>, Error>
  >;
  pagination: IUsePagination;
  sort: IUseSort<T>;
  useQueryInstance: UseQueryResult<
    AxiosResponse<PaginatedResponse<T>, any>,
    Error
  >;
  filters: Filter;
  setFilters: (filters: Filter) => void;
}
