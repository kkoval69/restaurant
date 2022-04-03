import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsInCart:[],
        filterCart:[],
        pricer:0
    },
    reducers:{
        setItemInCart:(state,action) =>{
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart:(state,action)=>{
            state.itemsInCart=state.itemsInCart.filter(tovar=>tovar.id!==action.payload)
        },
        searchCart:(state,action)=>{
            state.filterCart=action.payload
        },
        IncrementR:(state,action)=>{
            state.pricer=action.payload
        }
    }
});

export const {setItemInCart,deleteItemFromCart,searchCart,IncrementR} = cartSlice.actions;
export default cartSlice.reducer;