import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //configuration of the slice.
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //actions
    addItem: (state, action) => {
      //modify the data/state, using the state and action
      //mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
