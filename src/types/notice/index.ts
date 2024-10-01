export interface Notice {
  noticeId?: number;
  title: string;
  content: string;
  createdDate: string;
}

interface Information {
  dataList: Notice[];
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
