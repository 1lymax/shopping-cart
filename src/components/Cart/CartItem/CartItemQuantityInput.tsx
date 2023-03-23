import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {useCartActions} from "../../../hooks/actions";

const Container = styled.input`
  width: 25px;
  text-align: center;
  border: 1px solid lightgray;
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
  box-shadow: inset 1px 1px 3px #c7c7c7;
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
        <Container value={item.quantity} onChange={handleChange}>
        </Container>
    );
};

export default CartItemQuantityInput;