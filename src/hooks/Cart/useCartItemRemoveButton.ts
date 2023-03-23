import {ICartUnit} from "../../types/cart.type";
import {useCartActions} from "../actions";

export const useCartItemRemoveButton = (item: ICartUnit) => {
    const { removeItem, setTotalItems, setTotalPrice } = useCartActions()

    const onClick = () => {
        removeItem(item)
        setTotalItems()
        setTotalPrice()
    }

    return {
        onClick
    }
}