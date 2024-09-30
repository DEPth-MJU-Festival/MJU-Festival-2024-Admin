import styled from "styled-components";
import Button from "../../components/Button";

const NewNotice = () => {
  return (
    <Container>
      <Label>공지 제목 작성</Label>
      <TitleInput placeholder="게시글 제목을 입력하세요." />
      <Label>공지 글 작성</Label>
      <ContentInput placeholder="공지 글을 작성하여 주세요." />
      <ButtonContainer>
        <Button title={"게시"} />
      </ButtonContainer>
    </Container>
  );
};

export default NewNotice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 75px 15%;
`;

const Label = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const TitleInput = styled.input`
  height: 30px;
  width: 100%;
  border: black solid 1px;
  font-size: 20px;
  padding: 10px;

  ::placeholder {
    color: gray;
    opacity: 1;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  border: black solid 1px;
  height: 60vh;
  font-size: 16px;
  padding: 10px;
  resize: none; /* 크기 조절 삭제 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
