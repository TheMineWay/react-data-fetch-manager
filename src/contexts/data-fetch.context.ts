import { createContext } from "react";
import { DataFetchProvider } from "../types/providers";

export const DataFetchContext = createContext<{
  setContext: (context: DataFetchProvider) => void;
  context: DataFetchProvider;
} | null>(null);