import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  deleteNotice,
  getNoticeDetail,
  getNotices,
  postNotice,
  putNotice,
} from "../../api/notices";
import { NoticeResponse, NoticeResponseDetail } from "../../types/notice";

export function useGetNotice(
  page: number,
  size: number
): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notice";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getNotices(page, size),
  });
}

export function usePostNotice() {
  return useMutation<NoticeResponse, Error, { title: string; content: string }>(
    {
      mutationFn: ({ title, content }) => postNotice(title, content),
    }
  );
}

export function useGetNoticeDetail(
  noticeId: string
): UseSuspenseQueryResult<NoticeResponseDetail, Error> {
  const QUERY_KEY = "NoticeDetail";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getNoticeDetail(noticeId),
  });
}

export function useDeleteNotice() {
  return useMutation<NoticeResponse, Error, { noticeId: string }>({
    mutationFn: ({ noticeId }) => deleteNotice(noticeId),
  });
}

export function usePutNotice() {
  return useMutation<
    NoticeResponse,
    Error,
    { title: string; content: string; noticeId: string }
  >({
    mutationFn: ({ title, content, noticeId }) =>
      putNotice(title, content, noticeId),
  });
}
