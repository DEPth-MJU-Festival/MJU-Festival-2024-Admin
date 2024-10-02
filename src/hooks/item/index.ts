import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getItems } from "../../api/item";
import { ItemCategory, ItemResponse } from "../../types/lostItem/lostItem";

export function useGetitems(
  category: ItemCategory
): UseSuspenseQueryResult<ItemResponse, Error> {
  const QUERY_KEY = "items";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getItems(category),
  });
}
