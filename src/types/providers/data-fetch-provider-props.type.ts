import { QueryClient } from "@tanstack/react-query";
import { DataFetchingService } from "../../services/data-fetching";
import { DataFetchUIComponents } from "../ui/components/data-fetch-ui-components.type";

export interface DataFetchProviderProps {
  services: Record<string, DataFetchingService>;
  defaultService?: string;
  children?: JSX.Element | JSX.Element[];
  queryClient?: QueryClient;
  overrideUIComponents?: Partial<DataFetchUIComponents>;
}
