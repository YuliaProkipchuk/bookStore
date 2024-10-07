import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        total: 0,
        sum:0,
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.total++;
            const index = state.items.findIndex(book => book.id === action.payload.id);
            if (index > -1) {
                state.items[index].quantity++;
                state.items[index].totalPrice += state.items[index].price
            }
            else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: +action.payload.price
                })
            }
            state.sum+=action.payload.price
        },
        removefromCart: (state, action) => {
            state.total--;
            const index = state.items.findIndex(book => book.id === action.payload.id);
            if (state.items[index].quantity === 1) {
                state.items.splice(index, 1);
            }
            else {
                state.items[index].quantity--;
                state.items[index].totalPrice -= state.items[index].price
            }
            state.sum-=action.payload.price
        },
        deleteFromCart(state, action) {
            state.total-=action.payload.quantity;
            state.items = state.items.filter(book => book.id !== action.payload.id);
            state.sum-=action.payload.totalPrice
            
        }
    }
})
export const { addToCart, removefromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer