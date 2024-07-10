import {configureStore}  from '@reduxjs/toolkit'
import cartReducer from './Createslice'


const store = configureStore({
    reducer:{
        cart: cartReducer
    }
});

export default store;