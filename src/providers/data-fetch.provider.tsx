import React, { useState } from "react";
import { DataFetchProviderProps } from "../types/providers/data-fetch-provider-props.type";
import { DataFetchContext } from "../contexts/data-fetch.context";
import { DataFetchProvider } from "../types/providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DEFAULT_UI_COMPONENTS } from "../constants/ui/default-components/default-ui-components.constant";

let newQueryClient = new QueryClient();

export default function DataFetchProvider({
  children,
  services,
  defaultService,
  queryClient,
  overrideUIComponents,
}: DataFetchProviderProps) {
  const [context, setContext] = useState<DataFetchProvider>({
    services,
    defaultService: defaultService ?? Object.keys(services)[0],
    uiComponents: {
      ...DEFAULT_UI_COMPONENTS,
      ...overrideUIComponents,
    },
  });

  if (!context.defaultService)
    throw new Error(
      "Services were not initializated with a default service. Check that the defaultService prop is a valid string and that it exists in the services object."
    );

  return (
    <QueryClientProvider client={queryClient ?? newQueryClient}>
      <DataFetchContext.Provider
        value={{
          context,
          setContext,
        }}
      >
        {children}
      </DataFetchContext.Provider>
    </QueryClientProvider>
  );
}
