import { styled } from "styled-components";

const NoticeNav = () => {
  return (
    <Container>
      <Title>공지사항</Title>
      <WriteButton>글쓰기</WriteButton>
    </Container>
  );
};

export default NoticeNav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: black solid 2px;
  padding: 10px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  flex-grow: 1;
  text-align: center;
  margin-left: 80px;
`;

const WriteButton = styled.button`
  background-color: black;
  width: 146px;
  height: 50px;
  border-radius: 100px;
  color: white;
  font-size: 22px;
  margin-left: 20px;
`;
