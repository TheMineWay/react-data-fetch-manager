import React, { useState } from "react";
import { DataFetchProviderProps } from "../types/providers/data-fetch-provider-props.type";
import { DataFetchContext } from "../contexts/data-fetch.context";
import { DataFetchProvider } from "../types/providers";

export default function DataFetchProvider({ children, services, defaultService }: DataFetchProviderProps) {

  const [context, setContext] = useState<DataFetchProvider>({ services, defaultService: defaultService ?? Object.keys(services)[0] });

  if (!context.defaultService) throw new Error("Services were not initializated with a default service. Check that the defaultService prop is a valid string and that it exists in the services object.");

  return <DataFetchContext.Provider value={{
    context,
    setContext
  }}>{children}</DataFetchContext.Provider>;
}