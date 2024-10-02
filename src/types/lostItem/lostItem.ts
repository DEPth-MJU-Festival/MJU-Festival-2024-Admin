export type NaviTapType = "의류" | "소지품" | "전자기기" | "기타";

export type ItemCategory = "CLOTHES" | "ACCESSORY" | "ELECTRONICS" | "OTHER";

export interface LostItem {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ItemResponse {
  data: {
    check: boolean;
    information: LostItem[];
  };
}
