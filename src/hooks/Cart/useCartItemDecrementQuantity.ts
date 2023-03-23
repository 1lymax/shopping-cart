import {useCartActions} from "../actions";
import {ICartUnit} from "../../types/cart.type";

export const useCartItemDecrementQuantity = (item: ICartUnit) => {
    const {decrementQuantity, setTotalItems, setTotalPrice} = useCartActions()

    const onClick = () => {
        decrementQuantity(item)
        setTotalItems()
        setTotalPrice()
    }

    return {
        onClick
    }
}