import api from "..";
import { NoticeResponse } from "../../types/notice";

export async function getNotices(
  page: number,
  size: number
): Promise<NoticeResponse> {
  return await api.get(`api/v1/notices?page=${page}&size=${size}`);
}

export async function postNotice(
  title: string,
  content: string
): Promise<NoticeResponse> {
  const notice = {
    title: title,
    content: content,
  };
  return await api.post(`api/v1/notices`, notice);
}
