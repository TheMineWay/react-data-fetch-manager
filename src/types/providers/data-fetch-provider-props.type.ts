import { QueryClient } from "@tanstack/react-query";
import { DataFetchingService } from "../../services/data-fetching";

export interface DataFetchProviderProps {
  services: Record<string, DataFetchingService>;
  defaultService?: string;
  children?: JSX.Element | JSX.Element[];
  queryClient?: QueryClient;
}
