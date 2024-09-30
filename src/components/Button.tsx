import styled from "styled-components";

const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return <WriteButton onClick={onClick}>{title}</WriteButton>;
};

export default Button;

const WriteButton = styled.button`
  background-color: black;
  width: 146px;
  height: 50px;
  border-radius: 100px;
  color: white;
  font-size: 22px;
  margin-left: 20px;
  cursor: pointer;
`;
