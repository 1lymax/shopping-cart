import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../types/cart.type";
import {useCartActions} from "../../hooks/actions";

const Container = styled.button`
  margin-left: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #e7e7e7;
`

interface ICartItemRemoveButton {
    item: ICartUnit
    children: string | JSX.Element
}

const CartItemRemoveButton: FC<ICartItemRemoveButton> = ({ item, children }) => {
    const {removeItem, setTotalItems, setTotalPrice} = useCartActions()

    const handleClick = () => {
        removeItem(item)
        setTotalItems()
        setTotalPrice()
    }

    return (
        <Container onClick={handleClick}>
            {children}
        </Container>
    );
};

export default CartItemRemoveButton;