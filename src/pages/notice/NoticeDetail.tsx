import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { DUMMYCONTENT } from "../../constants/notice/dummyPostContent";

const NoticeDetail = () => {
  const navigator = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  const handleMoveEditPage = () => {
    navigator(`/noticeEdit?page=${page}`);
  };

  return (
    <>
      <Container>
        <Title>게시글 제목</Title>
        <Time>YYYY/MM/DD 13:00</Time>
        <Content>{DUMMYCONTENT}</Content>
      </Container>
      <ButtonContainer>
        <Button title={"수정"} onClick={handleMoveEditPage} />
        <Button title={"삭제"} />
      </ButtonContainer>
    </>
  );
};

export default NoticeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 15%;
  border: black solid 1px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

const Time = styled.p`
  font-size: 16px;
  margin: 1;
`;

const Content = styled.p`
  font-size: 16px;
  margin: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
