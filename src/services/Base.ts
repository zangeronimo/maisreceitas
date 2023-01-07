export type PaginationResult<T> = {
  data: T[];
  total: number;
};

export type BaseFilter = {
  params: {
    name?: string;
    order?: { field: string; order: string };
    page?: number;
    perPage?: number;
  };
};
