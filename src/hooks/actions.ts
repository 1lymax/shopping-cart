import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

import {cartActionCreators} from "../store/slices/cart.slice";
import {productActionCreators} from "../store/slices/product.slice";

export const useCartActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(cartActionCreators, dispatch)
}

export const useProductActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(productActionCreators, dispatch)
}
