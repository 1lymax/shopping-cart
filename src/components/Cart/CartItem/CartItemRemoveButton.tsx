import styled from "styled-components";
import React, {PropsWithChildren} from 'react';
import {ICartUnit} from "../../../types/cart.type";
import {useCartActions} from "../../../hooks/actions";

const Container = styled.button`
  margin-left: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #e7e7e7;
`

type CartItemRemoveButtonProps = {
    item: ICartUnit
}

const CartItemRemoveButton = (props: PropsWithChildren<CartItemRemoveButtonProps>) => {
    const { removeItem, setTotalItems, setTotalPrice } = useCartActions()

    const handleClick = () => {
        removeItem(props.item)
        setTotalItems()
        setTotalPrice()
    }

    return (
        <Container onClick={handleClick}>
            {props.children}
        </Container>
    );
};

export default CartItemRemoveButton;