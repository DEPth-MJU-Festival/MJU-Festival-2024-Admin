import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const AddLostItem = () => {
  const navigator = useNavigate();
  return (
    <Container onClick={() => navigator("/newLostItem")}>
      <ImageContainer>+</ImageContainer>
      <Name>분실물 추가</Name>
    </Container>
  );
};

export default AddLostItem;

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
  background: rgba(255, 255, 255);
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  box-shadow: 0 4px 10px rgba(141, 166, 212, 0.3);
  font-size: 50px;
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
