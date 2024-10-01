import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Notice } from "../../types/notice";

const NoticePreviewComponent = ({
  content,
  page,
}: {
  content: Notice;
  page: string;
}) => {
  const navigator = useNavigate();
  const handleMoveNoticeDetail = () => {
    navigator(`/noticeDetail?noticeId=${content.noticeId}`);
  };

  // 126자를 초과하는 경우 잘라내고 '...' 추가
  const truncateContent = (text: string | null | undefined) => {
    return text && text.length > 126 ? text.slice(0, 126) + "..." : text || "";
  };

  return (
    <Container onClick={handleMoveNoticeDetail}>
      <Title>{content.title}</Title>
      <Preview>{truncateContent(content.content)}</Preview>
      <Date>{content.createdDate}</Date>
    </Container>
  );
};

export default NoticePreviewComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: black solid 1px;
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin: 0;
`;

const Preview = styled.p`
  font-size: 16px;
  font-weight: lighter;
  margin: 0;
`;

const Date = styled.p`
  font-size: 14px;
  margin: 0;
`;
