import React, {FC} from 'react';
import styled from "styled-components";

import {ICartUnit} from "../../../types/cart.type";
import CartItemRemoveButton from "./CartItemRemoveButton";
import CartItemQuantityInput from "./CartItemQuantityInput";
import CartItemIncrementQuantityButton from "./CartItemIncrementQuantityButton";
import CartItemDecrementQuantityButton from "./CartItemDecrementQuantityButton";


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


interface ICartItemProps {
    item: ICartUnit
}

const CartItem: FC<ICartItemProps> = (props) => {
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
                <CartItemDecrementQuantityButton item={item}/>
                <CartItemQuantityInput item={item}/>
                <CartItemIncrementQuantityButton item={item}/>
                <CartItemRemoveButton item={item}>Del</CartItemRemoveButton>
            </ActionsWrapper>

        </Container>
    );
};

export default CartItem;