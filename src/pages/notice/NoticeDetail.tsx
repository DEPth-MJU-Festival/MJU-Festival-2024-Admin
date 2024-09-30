import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { DUMMYCONTENT } from "../../constants/notice/dummyPostContent";

const NoticeDetail = () => {
  const navigator = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const handleMoveEditPage = () => {
    navigator(`/noticeEdit?page=${page}`);
  };

  const handleRemoveNotice = () => {
    setIsShowModal(false);
    setIsShowDeleteModal(true);
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
        <Button title={"삭제"} onClick={() => setIsShowModal(true)} />
      </ButtonContainer>
      {isShowModal && (
        <Modal
          title={"공지를 삭제하시겠습니까?"}
          whiteText="취소"
          onWhiteButton={() => setIsShowModal(false)}
          blackText="삭제"
          onBlackButton={handleRemoveNotice}
        />
      )}
      {isShowDeleteModal && (
        <Modal
          title={"공지가 삭제되었습니다."}
          blackText="홈으로 돌아가기"
          onBlackButton={() => navigator("/")}
        />
      )}
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
