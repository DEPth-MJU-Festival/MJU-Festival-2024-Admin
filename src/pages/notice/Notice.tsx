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

  const { data, refetch } = useGetNotice(Number(page), 6);
  const noticeList = data.data.information.dataList;

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <Container>
      <NoticeNav />
      {noticeList.map((content, index) => (
        <NoticePreviewComponent content={content} key={index} page={page!} />
      ))}
      <NoticePageBar />
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
