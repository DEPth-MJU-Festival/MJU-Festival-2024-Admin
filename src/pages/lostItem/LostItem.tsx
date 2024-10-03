import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { deleteItem } from "../../api/item";
import AddLostItem from "../../components/lostItem/AddLostItem";
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

  const handleDeleteItem = async (itemId: string) => {
    try {
      await deleteItem(itemId);
      alert("분실물이 성공적으로 삭제되었습니다.");
      refetch();
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("삭제하는 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <LostItemBanner />
      <LostItemNav naviTap={naviTap} setNaviTap={setNaviTap} />
      <ItemContainer>
        {ItemsList.map((item, index) => (
          <LostItemComponent
            item={item}
            key={index}
            onDelete={handleDeleteItem}
          />
        ))}
        {/* 마지막 아이템 컴포넌트 옆에 추가 아이템 버튼을 배치 */}
        <AddLostItem />
      </ItemContainer>
    </Container>
  );
};

export default LostItem;

export const Container = styled.div`
  width: 80%;
  min-width: 800px;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div`
  background-color: #d9e0f0;
  padding: 30px 16px 60px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
