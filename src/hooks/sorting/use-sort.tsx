import { useState } from "react";
import { Sort } from "../../types";

export function useSort<T extends Object>() {
    const [sort, setSort] = useState<Sort<T>>([]);

    return {
        sort,
        setSort,
    }
}