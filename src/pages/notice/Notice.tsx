import { styled } from "styled-components";
import NoticeNav from "../../components/notice/NoticeNav";
import NoticePreviewComponent from "../../components/notice/NoticePreviewComponent";
import { dummyPreviewPosts } from "../../constants/notice";

const Notice = () => {
  return (
    <Container>
      <NoticeNav />
      {dummyPreviewPosts.map((preview, key) => (
        <NoticePreviewComponent preview={preview} key={key} />
      ))}
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
