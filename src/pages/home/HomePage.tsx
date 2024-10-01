import styled from "styled-components";
import HomeSelectButton from "../../components/home/HomeSelectButton";

const HomePage = () => {
  return (
    <Container>
      <HomeSelectButton title={"공지사항"} route={"/notice"} />
      <HomeSelectButton title={"분실물"} route={"/lostItem"} />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15%;
  gap: 50px;
  height: 100vh;
`;
