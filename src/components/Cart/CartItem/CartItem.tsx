import React, {FC} from 'react';
import styled from "styled-components";

import {ICartUnit} from "../../../types/cart.type";
import CartItemIncrementQuantity from "./CartItemIncrementQuantity";
import CartItemDecrementQuantity from "./CartItemDecrementQuantity";
import CartItemQuantityInput from "./CartItemQuantityInput";
import CartItemRemoveButton from "./CartItemRemoveButton";


const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`
const Title = styled.div`
  font-size: 1rem;
  max-width: 150px;
`
const Price = styled.div`
  font-size: 0.8rem;
  color: gray;;
`
const ActionsWrapper = styled.div``


interface CartItemProps {
    item: ICartUnit
}

const CartItem: FC<CartItemProps> = (props) => {
    const { item } = props

    return (
        <Container>
            <Title>
                {item.title}
                <Price>
                    {item.price}
                </Price>
            </Title>
            <ActionsWrapper>
                <CartItemDecrementQuantity item={item}/>
                <CartItemQuantityInput item={item}/>
                <CartItemIncrementQuantity item={item}/>
                <CartItemRemoveButton item={item}>Del</CartItemRemoveButton>
            </ActionsWrapper>

        </Container>
    );
};

export default CartItem;