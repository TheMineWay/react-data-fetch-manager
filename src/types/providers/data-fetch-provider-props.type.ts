import { DataFetchingService } from "../../services/data-fetching";

export interface DataFetchProviderProps {
    services: Record<string, DataFetchingService>;
    defaultService?: string;
    children?: JSX.Element | JSX.Element[];
}