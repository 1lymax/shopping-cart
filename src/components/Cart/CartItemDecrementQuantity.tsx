import React, {FC} from 'react';
import styled from "styled-components";
import {useCartActions} from "../../hooks/actions";
import {ICartUnit} from "../../types/cart.type";


const Container = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
interface ICartItemDecrementQuantity {
    item: ICartUnit,
}

const CartItemDecrementQuantity: FC<ICartItemDecrementQuantity> = ({ item }) => {
    const {decrementQuantity, setTotalItems, setTotalPrice} = useCartActions()

    const handleClick =() => {
        decrementQuantity(item)
        setTotalItems()
        setTotalPrice()
    }

    return (
        <Container onClick={handleClick}>
            -
        </Container>
    );
};

export default CartItemDecrementQuantity;