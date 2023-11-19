import axios, { AxiosRequestConfig } from "axios";
import { FetchOptions } from "../../types/data-fetching/fetch-options.type";

export class DataFetchingService {
  static fetch = async <T extends Object = Object>(options: FetchOptions<T>) => {
    return await axios.request<T>(this.mountConfig<T>(options));
  };

  static fetchFactory = async <T extends Object = Object>(
    options: FetchOptions<T>,
    fn: (options: AxiosRequestConfig) => Promise<T>
  ) => {
    return await fn(this.mountConfig(options));
  };

  private static mountConfig = <T extends Object>({
    url,
    body,
    method,
    params,
    pagination,
    ...options
  }: FetchOptions<T>) => {
        const query = params;

        if (pagination) {
          query["limit"] = pagination.limit;
          query["offset"] = pagination.offset;
        }

        return {
          url,
          data: body,
          method,
          ...options,
        };
  };
}