import api from "..";
import { ItemCategory, LostItem } from "../../types/lostItem/lostItem";

export async function getItems(category: ItemCategory): Promise<LostItem> {
  return await api.get(`api/v1/items?category=${category}`);
}
