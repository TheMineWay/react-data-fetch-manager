import { FetchOptions } from "./fetch-options.type";
import { DataFetchingService } from "../../services/data-fetching";
import { UsePaginationOptions } from "../pagination/use-pagination-options.type";
import { ObjectSchema } from "yup";

export interface UseManagedFetchingOptions<T extends Object> {
  fetchingService?: string | DataFetchingService;
  paginationOptions?: UsePaginationOptions;
  fetchOptions: FetchOptions<T>;
  schema: ObjectSchema<T>;
}
