import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    itemCount: 1,
  },
  reducers: {
    setItemCount: (state, action) => {
      state.itemCount = action.payload;
    },
  },
});

export const { setItemCount } = appSlice.actions;
export default appSlice.reducer;
