import React, { useState, useTransition } from "react";
import { Filter } from "../../types/filters/filter.type";
import { IUseManagedFetching } from "../../types";
import { useDataFetchContext } from "../../hooks/context/use-data-fetch-context";

type Props<T extends object> = {
  managedFetch: IUseManagedFetching<T>;
};

export default function ManagedFetchFilters<T extends object = object>({
  managedFetch,
}: Props<T>) {
  const {
    context: {
      uiComponents: { search },
    },
  } = useDataFetchContext();

  const { filters, setFilters } = managedFetch;

  const [isPending, startTransition] = useTransition();
  const [internalFilters, setInternalFilters] = useState<Filter>(filters);

  const apply = () => {
    setFilters(internalFilters);
  };

  return (
    <div>
      {search({
        onSearch: (value) => {
          startTransition(() => {
            setInternalFilters({ ...internalFilters, search: value });
            setFilters({ ...filters, search: value });
          });
        },
        placeholder: "Search...",
        loading: isPending,
        defaultValue: internalFilters.search,
      })}
    </div>
  );
}
