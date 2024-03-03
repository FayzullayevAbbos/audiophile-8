import { createSlice } from "@reduxjs/toolkit";
type InitialType = {
  itemCount: number;
  removeItems: boolean;
  totalPrice: number;
  proPrice: number;
  radio: boolean;
  productItem: [
    {
      slug: string;
      count:number;
      img: string;
      name: string;
      price: number;
    }
  ];
};

const initialState = {
  itemCount: 1,
  removeItems: false,
  totalPrice: 0,

  proPrice: 0,
  radio: false,
  productItem: [
    {
      slug: "",
      count:0,
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
            count:0,
            img: "",
            name: "",
            price: 0,
          },
        ];
      }
    },

    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setProPrice: (state, action) => {
      state.proPrice = action.payload;
    },
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
  },
});

export const {
  setItemCount,
  setProductItem,
  setRemoveItems,
  setTotalPrice,
  setProPrice,
  setRadio,
} = appSlice.actions;
export default appSlice.reducer;
