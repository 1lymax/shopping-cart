import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {useCartActions} from "../../../hooks/actions";


const Container = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
interface ICartItemIncrementQuantityButtonProps {
    item: ICartUnit;
}

const CartItemIncrementQuantityButton: FC<ICartItemIncrementQuantityButtonProps> = ({ item }) => {
    const {incrementQuantity, setTotalItems, setTotalPrice} = useCartActions()

    const handleClick = () => {
        incrementQuantity(item)
        setTotalItems()
        setTotalPrice()
    }

    return (
        <Container onClick={handleClick}>
            +
        </Container>
    );
};

export default CartItemIncrementQuantityButton;