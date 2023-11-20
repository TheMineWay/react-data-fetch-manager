import { useContext } from "react";
import { DataFetchContext } from "../../contexts/data-fetch.context";

export function useFetchingService() {
    const context = useContext(DataFetchContext);

    if (!context) throw new Error("Fetching services context has not been initialized.");

    const services = context.context.services;

    const getService = (serviceKey?: string) => {
        if (serviceKey === undefined) return services[context.context.defaultService];
        return services[serviceKey];
    };

    const defaultService = getService(context.context.defaultService);

    return {
        setContext: context.setContext,
        context: context.context,
        services,
        defaultService,
        getService,
    }
}