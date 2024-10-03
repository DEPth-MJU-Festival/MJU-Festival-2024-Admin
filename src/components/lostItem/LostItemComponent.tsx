import { useState } from "react";
import { styled } from "styled-components";
import { LostItem } from "../../types/lostItem/lostItem";
import Modal from "../Modal";

const LostItemComponent = ({
  item,
  onDelete,
}: {
  item: LostItem;
  onDelete: (itemId: string) => void;
}) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleDeleteItem = async () => {
    onDelete(item.id.toString());
    setIsShowModal(false);
  };
  return (
    <>
      <Container onClick={() => setIsShowModal(true)}>
        <ImageContainer>
          <Image src={item.imageUrl} />
        </ImageContainer>
        <Name>{item.title}</Name>
      </Container>
      {isShowModal && (
        <Modal
          title="해당 분실물 게시글을 삭제하시겠습니까?"
          whiteText="취소"
          blackText="삭제"
          onWhiteButton={() => setIsShowModal(false)}
          onBlackButton={handleDeleteItem}
        />
      )}
    </>
  );
};

export default LostItemComponent;

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 300px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  box-shadow: 0 4px 10px rgba(141, 166, 212, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
  font: var(--BodyText);
  margin-top: 10px;
`;
