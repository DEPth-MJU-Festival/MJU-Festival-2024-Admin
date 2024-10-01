import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getNotices, postNotice } from "../../api/notices";
import { NoticeResponse } from "../../types/notice";

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
