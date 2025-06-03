export type RequestResponse<T = unknown> = {
  success: boolean;
  data: T;
  totalCount?: number;
  totalPages?: number;
  [key: string]: any;
};
