import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICartState, ICartUnit} from "../../types/cart.type";
import {appClientStorage} from "../../App";


const initialState: ICartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    cartVisible: false,
    dragActive: false
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartUnit>) => {
            const updatedItem = state.items.find((item) => item.id === action.payload.id);
            if (updatedItem) {
                updatedItem.quantity++;
            } else {
                state.items.push(action.payload);
            }
        },
        incrementQuantity: (state, action: PayloadAction<ICartUnit>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) item.quantity++;
        },
        decrementQuantity: (state, action: PayloadAction<ICartUnit>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item)
                if (item.quantity === 1) {
                    item.quantity = 1
                } else {
                    item.quantity--;
                }
        },
        setQuantity: (state, action: PayloadAction<ICartUnit>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item)
                // If quantity is smaller than one then we set one
                item.quantity = action.payload.quantity >= 1 ? action.payload.quantity : 1;
        },
        removeItem: (state, action: PayloadAction<ICartUnit>) => {
            const removeItem = state.items.filter((item) => item.id !== action.payload.id);
            state.items = removeItem;
        },
        setTotalItems: (state) => {
            state.totalItems = state.items.reduce(function (prev, cur) {
                return prev + cur.quantity;
            }, 0);
            appClientStorage.setItem('cart', JSON.stringify(state.items))

        },
        setTotalPrice: (state) => {
            state.totalPrice = state.items.reduce(function (prev, cur) {
                return prev + cur.quantity * cur.price;
            }, 0);
        },
        setCartVisible: (state) => {
            state.cartVisible = !state.cartVisible
        },
        setDragActive: (state, action:PayloadAction<boolean>) => {
            state.dragActive = action.payload
        }

    },
});

export const cartReducer = cartSlice.reducer;
export const cartActionCreators = cartSlice.actions