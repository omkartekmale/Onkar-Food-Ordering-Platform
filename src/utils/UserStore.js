import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardclise"
const UserStore=configureStore({
     reducer:{
        cart:cartReducer
     }

})

export default UserStore; 