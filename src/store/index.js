import { configureStore } from "@reduxjs/toolkit";
import cartreducer from '../reducers/Cartreducer'
export const store = configureStore({
    reducer:{
        cart : cartreducer,
    }
});
