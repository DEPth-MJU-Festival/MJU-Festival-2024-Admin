import { styled } from "styled-components";
import { LostItemNaviList } from "../../constants/lostItem";
import { NaviTapType } from "../../types/lostItem/lostItem";

const LostItemNav = ({
  naviTap,
  setNaviTap,
}: {
  naviTap: NaviTapType;
  setNaviTap: (tap: NaviTapType) => void;
}) => {
  return (
    <Container>
      {LostItemNaviList.map((tap, index) => (
        <NavItem
          key={index}
          isActive={tap === naviTap}
          onClick={() => setNaviTap(tap)}
        >
          {tap}
        </NavItem>
      ))}
    </Container>
  );
};

export default LostItemNav;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 60px;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: ${(props) => (props.isActive ? "51.5px" : "50px")};
  background-color: ${(props) => (props.isActive ? "#d9e0f0" : "#7d94ca;")};
  font: ${(props) =>
    props.isActive ? "var(--TapFocus)" : "var(--TapDefault)"};
  color: ${(props) => (props.isActive ? "#7d94ca;" : "white")};
  border-top: ${(props) => (props.isActive ? "#a8b9e0 1.5px solid" : "")};
  border-bottom: ${(props) => (!props.isActive ? "#a8b9e0 1.5px solid" : "")};
  border-left: ${(props) => (props.isActive ? "#a8b9e0 1.5px solid" : "")};
  border-right: ${(props) => (props.isActive ? "#a8b9e0 1.5px solid" : "")};
`;
