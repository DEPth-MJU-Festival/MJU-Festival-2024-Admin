import { ItemCategory, NaviTapType } from "../types/lostItem/lostItem";

export const mapToItemCategory = (naviTap: NaviTapType): ItemCategory => {
  switch (naviTap) {
    case "의류":
      return "CLOTHES";
    case "소지품":
      return "ACCESSORY";
    case "전자기기":
      return "ELECTRONICS";
    case "기타":
      return "OTHER";
    default:
      throw new Error("Invalid NaviTapType");
  }
};
