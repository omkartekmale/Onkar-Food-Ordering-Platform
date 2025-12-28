import { createSlice } from "@reduxjs/toolkit";

const Cardclise=createSlice({
    name:"cart",
    initialState:{
        items:[""]
    },
    reducers:{
        additems:(state,action)=>{
               state.items.push(action.payload);
        },
        deleteitems:(state)=>{
            state.items.pop();
        }
        ,
        clearitem:(state)=>{
        state.items.length=0;
        }
    }
})

export const{additems,deleteitems,clearitem}=Cardclise.actions;

export default Cardclise.reducer;