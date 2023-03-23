import React, {useEffect, useState} from "react";

import {useCartActions} from "../actions";
import {ICartUnit} from "../../types/cart.type";

export const useCartItemQuantityInput = (item: ICartUnit) => {
    const [value, setValue] = useState(item.quantity.toString())
    const { setQuantity, setTotalPrice, setTotalItems} = useCartActions()

    useEffect(()=> {
        setValue(item.quantity.toString())
    }, [item.quantity])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        const updatedQuantity = parseInt(e.target.value)
        const { quantity, ...rest } = item
        setQuantity({ ...rest, quantity: updatedQuantity })
        setTotalPrice()
        setTotalItems()
    }

    return {
        value,
        onChange
    }

}