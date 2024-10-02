import { useEffect, useState } from "react";
import { styled } from "styled-components";
import LostItemBanner from "../../components/lostItem/LostItemBanner";
import LostItemComponent from "../../components/lostItem/LostItemComponent";
import LostItemNav from "../../components/lostItem/LostItemNav";
import { useGetitems } from "../../hooks/item";
import { NaviTapType } from "../../types/lostItem/lostItem";
import { mapToItemCategory } from "../../utils/mapToItemCategory";

const LostItem = () => {
  const [naviTap, setNaviTap] = useState<NaviTapType>("의류");

  const { data, refetch } = useGetitems(mapToItemCategory(naviTap));
  useEffect(() => {
    refetch();
  }, [naviTap]);
  const ItemsList = data.data.information;
  return (
    <Container>
      <LostItemBanner />
      <LostItemNav naviTap={naviTap} setNaviTap={setNaviTap} />
      <ItemContainer>
        {ItemsList.map((item, index) => (
          <LostItemComponent item={item} key={index} />
        ))}
      </ItemContainer>
    </Container>
  );
};

export default LostItem;

export const Container = styled.div`
  width: 80%;
  padding: 10%;
`;

export const ItemContainer = styled.div`
  background-color: #d9e0f0;
  padding: 30px 16px 60px 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
`;
