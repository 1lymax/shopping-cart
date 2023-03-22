import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Product, ProductState} from "../../types/product.type";

const initialState: ProductState = {
    products: []
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
    },
});

export const productReducer = productSlice.reducer;
export const productActionCreators = productSlice.actions
export const {setProducts} = productSlice.actions