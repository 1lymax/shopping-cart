import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {useCartItemDecrementQuantity} from "../../../hooks/Cart/useCartItemDecrementQuantity";


const DecrementButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
interface ICartItemDecrementQuantityButtonProps {
    item: ICartUnit,
}

const CartItemDecrementQuantityButton: FC<ICartItemDecrementQuantityButtonProps> = ({ item }) => {
    const buttonProps = useCartItemDecrementQuantity(item)

    return (
        <DecrementButton {...buttonProps}>
            -
        </DecrementButton>
    );
};

export default CartItemDecrementQuantityButton;