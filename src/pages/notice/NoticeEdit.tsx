import { useState } from "react"; // useState를 import
import styled from "styled-components";
import Button from "../../components/Button";

const NoticeEdit = () => {
  const [title, setTitle] = useState("제목제목제목제목");
  const [content, setContent] = useState("내용내용내용내용");

  return (
    <Container>
      <Label>공지 제목 작성</Label>
      <TitleInput
        name="title"
        placeholder="게시글 제목을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label>공지 글 작성</Label>
      <ContentInput
        name="content"
        placeholder="공지 글을 작성하여 주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ButtonContainer>
        <Button title={"게시"} />
      </ButtonContainer>
    </Container>
  );
};

export default NoticeEdit;

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
