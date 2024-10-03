export interface Notice {
  noticeId?: number;
  title: string;
  content: string;
  createdDate: string;
}

interface PageInfo {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
  hasNext: boolean;
  first: boolean;
}

interface Information {
  dataList: Notice[];
  pageInfo: PageInfo;
}

interface NoticeResponseData {
  check: boolean;
  information: Information;
}

export interface NoticeResponse {
  data: NoticeResponseData;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
}

// #---------------------------------------------------------------------------

interface NoticeDetailResponseData {
  check: boolean;
  information: Notice;
}

export interface NoticeResponseDetail {
  data: NoticeDetailResponseData;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
}
