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
    <div style={{ display: "flex", gap: "4em" }}>
      <div style={{ width: "100%" }}>
        <ManagedFetchFilters managedFetch={managedFetch} />
      </div>
      {render && (
        <div style={{ width: "100%" }}>
          {render({ rows: managedFetch.data })}
        </div>
      )}
    </div>
  );
}
