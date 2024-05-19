export interface ServerType {
  key: string;
  processor: string;
  disk: string;
  ram: string;
  rentPerMonth: string;
}

export interface PaginationType {
  current: number;
  pageSize: number;
  totalPages: number;
}

export interface ColumnsType {
  title: string;
  dataIndex: string;
  key: string;
}

export interface FormType {
  text: string;
  mail: string;
}

export interface FormPdfType {
  text: string;
  picture: string;
}
