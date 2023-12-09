import { useContext } from "react";
import { DataFetchContext } from "../../contexts/data-fetch.context";

export function useDataFetchContext() {
  const context = useContext(DataFetchContext);

  if (!context) throw new Error("No DataFetch context detected");

  return context;
}
