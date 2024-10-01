import styled from "styled-components";
import Button from "./Button";
import ButtonWhite from "./ButtonWhite";

const Modal = ({
  title,
  blackText,
  whiteText,
  onBlackButton,
  onWhiteButton,
}: {
  title: string;
  blackText?: string;
  whiteText?: string;
  onBlackButton?: () => void;
  onWhiteButton?: () => void;
}) => {
  return (
    <Container>
      <Overlay />
      <ModalContainer>
        <Title>{title}</Title>
        <ButtonContainer>
          {whiteText && (
            <ButtonWhite title={whiteText} onClick={onWhiteButton} />
          )}
          {blackText && <Button title={blackText} onClick={onBlackButton} />}
        </ButtonContainer>
      </ModalContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 40px 50px;
  width: 500px; /* 모달 너비 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

const Title = styled.h2`
  margin: 10px 0px;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;
