import React, {useEffect} from 'react';

import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import {useCartActions} from "./hooks/actions";
import CartFloatingContainer from "./components/Cart/CartFloatingContainer";
import {LocalStorage} from "./store/LocalStorage/LocalStorage";

export const appClientStorage = new LocalStorage()

function App() {
    const { addToCart, setTotalItems, setTotalPrice } = useCartActions()


    // initialize cart if localstorage with cart data is not empty
    useEffect(() => {
        const storedCart = appClientStorage.getItem('cart')
        if (storedCart) {
            const cart = JSON.parse(storedCart)
            for (let item of cart) {
                addToCart(item)
            }
            // setting totals of cart
            setTotalItems()
            setTotalPrice()
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Navbar/>
            <CartFloatingContainer/>
            <ProductPage/>
        </div>
    );
}

export default App;
