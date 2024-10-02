import { styled } from "styled-components";

const LostItemBanner = () => {
  return (
    <Container>
      <Title>분실물 안내</Title>
      <Content>
        축제 기간 내 접수된 분실물입니다. <br /> 이미지 내에 분실물이 있으신
        분은 응급부스로 해당 분실물을 찾으러 와 주시기 바랍니다.
      </Content>
    </Container>
  );
};

export default LostItemBanner;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;
