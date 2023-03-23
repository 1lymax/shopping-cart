import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

import {cartActionCreators} from "../store/slices/cart.slice";

export const useCartActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(cartActionCreators, dispatch)
}

