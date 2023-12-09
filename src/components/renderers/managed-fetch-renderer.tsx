import React from "react";
import ManagedFetchFilters from "../filters/managed-fetch-filters";
import { IUseManagedFetching } from "../../types";

type Props<T extends object> = {
  loading?: JSX.Element;
  render?: (options: { rows: T[] }) => JSX.Element;
  managedFetch: IUseManagedFetching<T>;
};

export default function ManagedFetchRenderer<T extends object>({
  managedFetch,
  render,
}: Props<T>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <div>
        <ManagedFetchFilters managedFetch={managedFetch} />
      </div>
      {render && <div>{render({ rows: managedFetch.data })}</div>}
    </div>
  );
}
