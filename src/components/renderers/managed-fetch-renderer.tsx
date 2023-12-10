import React from "react";
import ManagedFetchFilters from "../filters/managed-fetch-filters";
import { IUseManagedFetching } from "../../types";
import { useDataFetchContext } from "../../hooks/context/use-data-fetch-context";
import { DataFetchUIComponents } from "../../types/providers";

export type ManagedFetchRendererProps<T extends object> = {
  loading?: JSX.Element;
  render?: (options: { rows: T[] }) => JSX.Element;
  managedFetch: IUseManagedFetching<T>;
  overrideUI?: Partial<Pick<DataFetchUIComponents, "layout">>;
};

export default function ManagedFetchRenderer<T extends object>({
  managedFetch,
  overrideUI,
  render,
}: ManagedFetchRendererProps<T>) {
  const {
    context: {
      uiComponents: { layout: providerLayout, pagination },
    },
  } = useDataFetchContext();

  const layout = overrideUI?.layout ?? providerLayout;

  return (
    <>
      {layout({
        Filters: ManagedFetchFilters,
        managedFetch,
        Content: () => (render ? render({ rows: managedFetch.data }) : <></>),
        Pagination: () => pagination({ pagination: managedFetch.pagination }),
      })}
    </>
  );
}
