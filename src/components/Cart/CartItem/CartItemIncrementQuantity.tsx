import React, {FC} from 'react';
import styled from "styled-components";
import {useCartActions} from "../../../hooks/actions";
import {ICartUnit} from "../../../types/cart.type";


const Container = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
interface ICartItemIncrementQuantity {
    item: ICartUnit;
}

const CartItemIncrementQuantity: FC<ICartItemIncrementQuantity> = ({ item }) => {
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

export default CartItemIncrementQuantity;