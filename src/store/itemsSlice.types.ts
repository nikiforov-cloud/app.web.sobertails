import { Item } from '@/index';

export interface ItemsState {
  data: Record<string, Item[]>;
  loading: boolean;
  error: string | null;
}

export interface FetchItemsResponse {
  item: string;
  data: Item[];
}
