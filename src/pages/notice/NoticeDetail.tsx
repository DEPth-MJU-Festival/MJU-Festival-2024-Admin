import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useGetNoticeDetail } from "../../hooks/notices";

const NoticeDetail = () => {
  const navigator = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const noticeId = queryParams.get("noticeId");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const { data, isLoading } = useGetNoticeDetail(noticeId!);
  const noticeDetail = data.data.information;

  const handleMoveEditPage = () => {
    navigator(`/noticeEdit?noticeId=${noticeId}`);
  };

  const handleRemoveNotice = () => {
    setIsShowModal(false);
    setIsShowDeleteModal(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingMessage>로딩 중입니다...</LoadingMessage>
      ) : (
        <>
          <Container>
            <Title>{noticeDetail.title}</Title>
            <Time>{noticeDetail.createdDate}</Time>
            <Content>{noticeDetail.content}</Content>
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
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  color: gray;
`;
