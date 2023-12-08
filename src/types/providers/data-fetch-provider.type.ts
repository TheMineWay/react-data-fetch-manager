import { DataFetchingService } from "../../services/data-fetching";
import { DataFetchUIComponents } from "../ui/components/data-fetch-ui-components.type";

export interface DataFetchProvider {
  defaultService: string;
  services: Record<string, DataFetchingService>;
  uiComponents: DataFetchUIComponents;
}
