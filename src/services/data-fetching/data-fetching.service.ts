import axios, { AxiosRequestConfig } from "axios";
import { FetchOptions } from "../../types/data-fetching/fetch-options.type";
import { PaginatedResponse } from "../../types/data-fetching/paginated-response.type";

type Response<T> = PaginatedResponse<T>;

export class DataFetchingService {
  private requestFactory?: (
    options: FetchOptions<Object>
  ) => Promise<FetchOptions<Object>>;
  private constructor() {}

  public static new() {
    return new DataFetchingService();
  }

  public static fromFactory(
    factory: (options: FetchOptions<Object>) => Promise<FetchOptions<Object>>
  ) {
    const newInstance = this.new();
    newInstance.requestFactory = factory;
    return newInstance;
  }

  fetch = async <T extends Object = Object>(options: FetchOptions<T>) => {
    return await axios.request<Response<T>>(await this.mountConfig<T>(options));
  };

  fetchFactory = async <T extends Object = Object>(
    options: FetchOptions<T>,
    fn: (options: AxiosRequestConfig) => Promise<T>
  ) => {
    return await fn(await this.mountConfig(options));
  };

  private mountConfig = async <T extends Object>(options: FetchOptions<T>) => {
    const {
      url,
      body,
      method,
      params,
      pagination,
      filters,
      sort,
      ..._options
    } = this.requestFactory
      ? await this.requestFactory(options as unknown as FetchOptions<Object>)
      : options;

    const query = params ?? {};

    if (pagination) {
      query["limit"] = pagination.limit;
      query["offset"] = pagination.offset;
    }

    if (filters) {
      query["filters"] = JSON.stringify(filters);
    }

    if (sort) {
      query["sort"] = sort;
    }

    return {
      url,
      data: body,
      method,
      params: {
        ...params,
        ...query,
      },
      ..._options.options,
    };
  };
}
