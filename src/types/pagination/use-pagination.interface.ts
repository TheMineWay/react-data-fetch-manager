export interface IUsePagination {
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  correctPage: (page: number) => number;
  lastPage: number;
  total: number;
  setTotal: (total: number) => void;
}
