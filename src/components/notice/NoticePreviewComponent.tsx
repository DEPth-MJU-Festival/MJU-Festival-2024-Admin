import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NoticePreviewProp } from "../../types/notice";

const NoticePreviewComponent = ({
  preview,
  page,
}: {
  preview: NoticePreviewProp;
  page: number;
}) => {
  const navigator = useNavigate();
  const handleMoveNoticeDetail = () => {
    navigator(`/noticeDetail?page=${page}`);
  };
  return (
    <Conatiner onClick={handleMoveNoticeDetail}>
      <Title>{preview.title}</Title>
      <Preview>{preview.preview}</Preview>
      <Date>{preview.date}</Date>
    </Conatiner>
  );
};

export default NoticePreviewComponent;

const Conatiner = styled.div`
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
  font-size: 22;
  margin: 0;
`;
const Preview = styled.p`
  font-size: 16;
  font-weight: lighter;
  margin: 0;
`;
const Date = styled.p`
  font-size: 14;
  margin: 0;
`;
