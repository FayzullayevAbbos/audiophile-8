import { createSlice } from "@reduxjs/toolkit";
type InitialType = {
  itemCount: number;
  removeItems: boolean;
  productItem: [
    {
      slug: string;
      img: string;
      name: string;
      price: number;
    }
  ];
  prevItem: [
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
  removeItems: false,
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
    setRemoveItems: (state, action) => {
      state.removeItems = action.payload;
    },
    setProductItem: (state, action) => {
      const { slug } = action.payload;
      const objectExists = state.productItem.some((obj) => obj.slug === slug);
      if (!objectExists) {
        state.productItem.push(action.payload);
      }
      if (state.removeItems) {
        state.productItem = [
          {
            slug: "",
            img: "",
            name: "",
            price: 0,
          },
        ];
      }
    },
  },
});

export const { setItemCount, setProductItem } = appSlice.actions;
export default appSlice.reducer;
