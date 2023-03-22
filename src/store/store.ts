import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import {rootWatcher} from "./saga";
import {cartReducer} from "./slices/cart.slice";
import {productReducer} from "./slices/product.slice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch