import { useState } from "react"; // useState를 import
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useGetNoticeDetail, usePutNotice } from "../../hooks/notices";

const NoticeEdit = () => {
  const [searchParams] = useSearchParams();
  const noticeId = searchParams.get("noticeId")!;
  const { data } = useGetNoticeDetail(noticeId!);
  const noticeDetail = data.data.information;

  const [title, setTitle] = useState(noticeDetail.title);
  const [content, setContent] = useState(noticeDetail.content);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigator = useNavigate();

  const { mutate: editNotice } = usePutNotice();

  const handleEditNotice = () => {
    editNotice(
      { title, content, noticeId },
      {
        onSuccess: () => {
          setIsShowModal(true);
        },
        onError: (error) => {
          console.error("공지 등록 실패:", error);
        },
      }
    );
  };

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
        <Button title={"게시"} onClick={handleEditNotice} />
      </ButtonContainer>
      {isShowModal && (
        <Modal
          title={"게시 완료"}
          whiteText="공지 보러 가기"
          onWhiteButton={() => navigator("/notice?page=1")}
          blackText="홈으로 돌아가기"
          onBlackButton={() => navigator("/")}
        />
      )}
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
