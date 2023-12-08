import { useQuery } from "@tanstack/react-query";
import { UseManagedFetchingOptions } from "../../types/data-fetching/use-managed-fetching-options.type";
import { useFetchingService } from "../fetching-clients/use-fetching-service";
import { usePagination } from "../pagination";
import { useEffect, useState } from "react";
import { useSort } from "../sorting";
import { IUseManagedFetching } from "../../types/data-fetching/use-managed-fetching.interface";
import { Filter } from "../../types/filters/filter.type";

export function useManagedFetching<T extends Object>({
  fetchOptions: { url, ...fetchOptions },
  paginationOptions,
}: Omit<UseManagedFetchingOptions<T>, "pagination">) {
  const [total, setTotal] = useState(0);
  const { getService } = useFetchingService();

  const pagination = usePagination(paginationOptions ?? { total });
  const { pageSize, offset, currentPage } = pagination;

  const [filters, setFilters] = useState<Filter>({});
  const sort = useSort<T>();

  console.log({ filters });

  const useQueryInstance = useQuery({
    queryKey: [
      "react-data-fetch-manager",
      "managed-fetching",
      ...url.split("/"),
    ],
    queryFn: async () => {
      const fetchingService = getService();

      const response = await fetchingService.fetch<T>({
        url,
        pagination: {
          limit: pageSize,
          offset: offset,
        },
        ...fetchOptions,
      });

      if (total !== response.data.count) setTotal(response.data.count);

      return response;
    },
  });

  useEffect(() => {
    useQueryInstance.refetch();
  }, [useQueryInstance, currentPage, sort.sort]);

  return {
    data: useQueryInstance.data?.data?.rows ?? [],
    refetch: useQueryInstance.refetch,
    pagination,
    sort,
    total,
    useQueryInstance,
    filters,
    setFilters,
  } satisfies IUseManagedFetching<T>;
}
