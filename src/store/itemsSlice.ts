import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ItemsState, FetchItemsResponse } from './itemsSlice.types';
import { Item } from '@/index';

const API_URL: string = import.meta.env.VITE_API_URI as string;

const initialState: ItemsState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk<FetchItemsResponse, string>(
  'items/fetchItems',
  async (item: string) => {
    const response = await fetch(`${API_URL}/1/search.php?s=${item}`);

    if (!response.ok) {
      throw new Error('Fetching error');
    }

    const data: unknown = await response.json();
    if (typeof data !== 'object' || data === null || !('drinks' in data)) {
      throw new Error('Invalid response structure');
    }

    return { item, data: (data as { drinks?: Item[] }).drinks ?? [] };
  },
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<FetchItemsResponse>) => {
        state.loading = false;
        state.data[action.payload.item] = action.payload.data;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching data';
      });
  },
});

export const { clearError } = itemsSlice.actions;
export default itemsSlice.reducer;
