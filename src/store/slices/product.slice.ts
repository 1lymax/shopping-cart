import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IProduct, IProductState} from "../../types/product.type";

const initialState: IProductState = {
    products: []
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
    },
});

export const productReducer = productSlice.reducer;
export const {setProducts} = productSlice.actions