import { createSlice, Dispatch, Slice } from "@reduxjs/toolkit";
import fetchData from "@/utils/mock";

const authSlice: Slice = createSlice({
  name: "demo",
  initialState: {
    demoData: [],
  },
  reducers: {
    //同步方法
    getDemoData(state, { payload }) {
      state.demoData = payload;
    },
  },
});

//异步方法
export const getDemoDataAsync = async (dispatch: Dispatch) => {
  const res = await fetchData();
  dispatch(getDemoData(res));
};

export const { getDemoData } = authSlice.actions;
export default authSlice.reducer;
