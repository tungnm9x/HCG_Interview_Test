export interface ResultItem {
  name: string;
  url: string;
}

export interface GetListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: ResultItem[];
}
