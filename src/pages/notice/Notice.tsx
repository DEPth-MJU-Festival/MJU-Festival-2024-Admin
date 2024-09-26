import { styled } from "styled-components";
import NoticeNav from "../../components/notice/NoticeNav";
import NoticePageBar from "../../components/notice/NoticePageBar";
import NoticePreviewComponent from "../../components/notice/NoticePreviewComponent";
import { DUMMYPREVIEWPOSTS } from "../../constants/notice";

const Notice = () => {
  return (
    <Container>
      <NoticeNav />
      {DUMMYPREVIEWPOSTS.map((preview, key) => (
        <NoticePreviewComponent preview={preview} key={key} />
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
