import {IProduct} from "../../types/product.type";
import {useCartActions} from "../actions";

export const useAddToCart = (product: IProduct) => {
    const {addToCart, setTotalItems, setTotalPrice} = useCartActions()

    // When adding product to cart also recalculate totals with setTotalPrice() and setTotalItems()
    const onClick = () => {
        // because of quantity is not a prop of product we set it manually
        addToCart({ ...product, quantity: 1 })
        setTotalPrice()
        setTotalItems()
    }

    return {
        onClick
    }
}