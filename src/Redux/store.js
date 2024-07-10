import {configureStore}  from '@reduxjs/toolkit'
import cartReducer from './Createslice'

import productReducer from './ProductSlice';


const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer
    }
});

export default store;