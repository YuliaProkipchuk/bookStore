import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        total:0,
        items:[]
    },
    reducers:{
        addToCart:(state, action)=>{
            state.total++;
            const index = state.items.findIndex(book=>book.id===action.payload.id);
            console.log(index)
            if(index>-1){
                state.items[index].quantity++;
                state.items[index].totalPrice += +state.items[index].price 
            }
            else{
                state.items.push({
                    ...action.payload,
                    quantity:1,
                    totalPrice: +action.payload.price
                })
            }
        },
        removefromCart:(state, action)=>{

        }
    }
})
export const {addToCart, removefromCart} = cartSlice.actions;
export default cartSlice.reducer