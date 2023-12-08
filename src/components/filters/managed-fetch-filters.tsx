import React, { useContext, useState, useTransition } from "react";
import { DataFetchContext } from "../../contexts/data-fetch.context";
import { Filter } from "../../types/filters/filter.type";
import { IUseManagedFetching } from "../../types";

type Props<T extends object> = {
  managedFetch: IUseManagedFetching<T>;
};

export default function ManagedFetchFilters<T extends object = object>({
  managedFetch,
}: Props<T>) {
  const context = useContext(DataFetchContext);

  if (!context) throw new Error("No DataFetch context detected");

  const { filters, setFilters } = managedFetch;

  const [isPending, startTransition] = useTransition();
  const [internalFilters, setInternalFilters] = useState<Filter>(filters);

  const apply = () => {
    setFilters(internalFilters);
  };

  const {
    context: {
      uiComponents: { search },
    },
  } = context;

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
