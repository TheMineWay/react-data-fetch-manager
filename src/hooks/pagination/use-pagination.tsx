import { useEffect, useState } from "react";
import { UsePaginationOptions } from "../../types/pagination/use-pagination-options.type";
import { IUsePagination } from "../../types/pagination/use-pagination.interface";

export function usePagination({
  initialPageSize,
  initialPage,
  total: _total,
}: UsePaginationOptions = {}) {
  const [total, setTotal] = useState(_total ?? 0);
  const [pageSize, setPageSize] = useState(initialPageSize ?? 20);
  const [currentPage, setCurrentPageState] = useState(initialPage ?? 0);

  const offset = currentPage * pageSize;
  const lastPage = total < pageSize ? 0 : Math.floor(total / pageSize);

  const setCurrentPage = (page: number) => {
    setCurrentPageState(correctPage(page));
  };

  const correctPage = (page: number) => {
    if (total === 0 || page <= 0) return 0;
    else if ((page + 1) * pageSize >= total) return lastPage;
    else return page;
  };

  useEffect(() => {
    const newPage = correctPage(currentPage);
    if (newPage !== currentPage) setCurrentPage(newPage);
  }, [pageSize, currentPage, total]);

  const movePage = (pages: number) => {
    setCurrentPage(currentPage + pages);
  };

  const nextPage = () => movePage(1);
  const prevPage = () => movePage(-1);

  return {
    pageSize,
    setPageSize,
    offset,
    currentPage,
    setCurrentPage,
    correctPage,
    lastPage,
    total,
    setTotal,
    prevPage,
    nextPage,
    movePage,
  } satisfies IUsePagination;
}
