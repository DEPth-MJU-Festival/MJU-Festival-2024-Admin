import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HomeSelectButton = ({
  title,
  route,
}: {
  title: "공지사항" | "분실물";
  route: string;
}) => {
  return (
    <StyledLink to={route}>
      <Text>{title}</Text>
    </StyledLink>
  );
};

export default HomeSelectButton;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 80px;
  width: 100%;
  background-color: #000000;
  cursor: pointer;
  border-radius: 167px;
`;

const Text = styled.span`
  color: white;
`;
