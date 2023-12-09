import React from "react";
import ManagedFetchFilters from "../filters/managed-fetch-filters";
import { IUseManagedFetching } from "../../types";
import { useDataFetchContext } from "../../hooks/context/use-data-fetch-context";
import { DataFetchUIComponents } from "../../types/providers";

export type ManagedFetchRendererProps<T extends object> = {
  loading?: JSX.Element;
  render?: (options: { rows: T[] }) => JSX.Element;
  managedFetch: IUseManagedFetching<T>;
} & Partial<Pick<DataFetchUIComponents, "layout">>;

export default function ManagedFetchRenderer<T extends object>({
  managedFetch,
  render,
  layout: customLayout,
}: ManagedFetchRendererProps<T>) {
  const {
    context: {
      uiComponents: { layout: providerLayout },
    },
  } = useDataFetchContext();

  const layout = customLayout ?? providerLayout;

  return (
    <>
      {layout({
        Filters: ManagedFetchFilters,
        managedFetch,
        render,
      })}
    </>
  );
}
