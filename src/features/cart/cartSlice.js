import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        itemFound.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += price * quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0; // Asegúrate de reasignar correctamente el total
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        state.total -= item.price * item.quantity; // Resta el total del carrito
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    }
  }
});

export const { addItemCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
