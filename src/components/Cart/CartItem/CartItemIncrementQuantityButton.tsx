import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {useCartItemIncrementQuantity} from "../../../hooks/Cart/useCartItemIncrementQuantity";


const IncrementButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
interface ICartItemIncrementQuantityButtonProps {
    item: ICartUnit;
}

const CartItemIncrementQuantityButton: FC<ICartItemIncrementQuantityButtonProps> = ({ item }) => {
    const { onClick } = useCartItemIncrementQuantity(item)

    return (
        <IncrementButton onClick={onClick}>
            +
        </IncrementButton>
    );
};

export default CartItemIncrementQuantityButton;