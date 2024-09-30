import styled from "styled-components";

const ButtonWhite = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return <WriteButton onClick={onClick}>{title}</WriteButton>;
};

export default ButtonWhite;

const WriteButton = styled.button`
  background-color: White;
  width: 180px;
  height: 50px;
  border-radius: 100px;
  color: black;
  font-size: 22px;
  margin-left: 20px;
  cursor: pointer;
`;
