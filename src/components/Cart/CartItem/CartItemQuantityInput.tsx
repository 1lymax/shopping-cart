import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {useCartActions} from "../../../hooks/actions";
import {Input} from "../../../theme/Input";

const QuantityInput = styled(Input)`
  width: 25px;
  text-align: center;
`

interface ICartItemQuantityInputProps {
    item: ICartUnit
}

const CartItemQuantityInput: FC<ICartItemQuantityInputProps> = ({ item }) => {
    const { setQuantity, setTotalPrice, setTotalItems} = useCartActions()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedQuantity = parseInt(e.target.value)
        const { quantity, ...rest } = item
        setQuantity({ ...rest, quantity: updatedQuantity })
        setTotalPrice()
        setTotalItems()
    }

    return (
        <QuantityInput value={item.quantity} onChange={handleChange}>
        </QuantityInput>
    );
};

export default CartItemQuantityInput;