import {useCartActions} from "../actions";
import {ICartUnit} from "../../types/cart.type";

export const useCartItemIncrementQuantity = (item: ICartUnit) => {
    const {incrementQuantity, setTotalItems, setTotalPrice} = useCartActions()

    const onClick = () => {
        incrementQuantity(item)
        setTotalItems()
        setTotalPrice()
    }

    return {
        onClick
    }
}