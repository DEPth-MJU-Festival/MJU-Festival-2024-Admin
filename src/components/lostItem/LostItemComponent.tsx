import { styled } from "styled-components";
import { LostItem } from "../../types/lostItem/lostItem";

const LostItemComponent = ({ item }: { item: LostItem }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.imageUrl} />
      </ImageContainer>
      <Name>{item.title}</Name>
    </Container>
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
