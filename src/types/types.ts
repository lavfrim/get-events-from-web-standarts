export interface Time {
  day: number;
  month: number;
  year: number;
}

export interface TableConfig {
  header: string[];
  body: string[][];
}

export interface TableStyles {
  table: string;
  head: string;
  row: string;
  cell: string;
}
