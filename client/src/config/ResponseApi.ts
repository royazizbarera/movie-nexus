export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ResponseApiProps {
  code: number;
  message: string;
  data?: any;
  errors?: any;
  pagination?: PaginationProps;
  version?: number;
}

export default function ResponseApi(props: ResponseApiProps) {
  const response: { 
    code: number;
    message: string;
    data?: any;
    errors?: any;
    pagination?: PaginationProps;
    version?: number;
  } = {
    code: props.code,
    message: props.message,
    data: props.data,
    errors: props.errors,
    pagination: props.pagination,
    version: props.version || 1.0,
  };

  return response;
}
