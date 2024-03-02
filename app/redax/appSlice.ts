import { createSlice } from "@reduxjs/toolkit";
type InitialType = {
  itemCount: number;
  productItem: [
    {
      slug: string;
      img: string;
      name: string;
      price: number;
    }
  ];
};

const initialState = {
  itemCount: 1,
  productItem: [
    {
      slug: "",
      img: "",
      name: "",
      price: 0,
    },
  ],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setItemCount: (state, action) => {
      state.itemCount = action.payload;
    },
    setProductItem: (state, action) => {
      state.productItem.push(action.payload);
    },
  },
});

export const { setItemCount, setProductItem } = appSlice.actions;
export default appSlice.reducer;
