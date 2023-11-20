import { DataFetchingService } from "../../services/data-fetching";

export interface DataFetchProvider {
    defaultService: string;
    services: Record<string, DataFetchingService>;
}