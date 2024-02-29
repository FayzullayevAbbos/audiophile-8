import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    api: [],
  },
  reducers: {
    setApi: (state, action) => {
      state.api = action.payload;
    },
  },
});

export const { setApi } = appSlice.actions;
export default appSlice.reducer;
