import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import NoticeNav from "../../components/notice/NoticeNav";
import NoticePageBar from "../../components/notice/NoticePageBar";
import NoticePreviewComponent from "../../components/notice/NoticePreviewComponent";
import { useGetNotice } from "../../hooks/notices";

const Notice = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, refetch, isLoading, error } = useGetNotice(Number(page), 6);

  const noticeList = data?.data?.information?.dataList || [];

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <Container>
      <NoticeNav />
      {isLoading && <LoadingMessage>로딩 중입니다...</LoadingMessage>}
      {error && <ErrorMessage>오류 발생: {error.message}</ErrorMessage>}
      {noticeList.length > 0 ? (
        noticeList.map((content, index) => (
          <NoticePreviewComponent content={content} key={index} />
        ))
      ) : (
        <NoNoticeMessage>공지사항이 없습니다.</NoNoticeMessage>
      )}
      <NoticePageBar totalPage={data.data.information.pageInfo.totalPage} />
    </Container>
  );
};

export default Notice;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 15%;
  gap: 30px;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  color: gray;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
`;

const NoNoticeMessage = styled.div`
  font-size: 18px;
  color: black;
`;
