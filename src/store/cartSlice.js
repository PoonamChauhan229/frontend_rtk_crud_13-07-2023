import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //what can be actions inside the cart
    //here we will tell what action will call which reducer function
    //reducer is nothing but a function
    //actionItem: ()=>{}=> reducer function
    //reducer takes two paraemeter=> state and action
    //action is the place where i will get the items to add to the cart.
    //when we dispatch the actions at that time we will use this.
    //state is the initialState.
    //action is the data which is coming in
    
    addItem: (state, action) => {
        //logic to modify the stae.
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//export should be done in this way.
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//only reducer=> combiners all the reducers and give it as one basically

