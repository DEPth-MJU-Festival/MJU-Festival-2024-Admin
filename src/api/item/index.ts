import api from "..";
import { ItemCategory, LostItem } from "../../types/lostItem/lostItem";

export async function getItems(category: ItemCategory): Promise<LostItem> {
  return await api.get(`api/v1/items?category=${category}`);
}

export async function postItem(formData: FormData): Promise<LostItem> {
  return await api.post(`api/v1/items`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function deleteItem(itemId: string): Promise<LostItem> {
  return await api.delete(`api/v1/items/${itemId}`);
}
