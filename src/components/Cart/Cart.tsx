import React from 'react';
import styled from "styled-components";

import CartItem from "./CartItem";
import CartButton from "./CartButton";
import {useAppSelector} from "../../hooks/appHook";
import {useCartActions} from "../../hooks/actions";


interface StyledContainerProps {
    isVisible: boolean
}

const Container = styled.div<StyledContainerProps>`
  position: absolute;
  width: 300px;
  z-index: 3;
  right: 0;
  top: 73px;
  padding: 10px 15px;
  background-color: #f6f6f6;
  border-radius: 0 0 10px 10px;
  box-shadow: 5px 5px 25px lightgray;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`
const BackgroundLayer = styled.div<StyledContainerProps>`
  position: absolute;
  z-index: 2;
  inset: auto 0 0;
  height: 100vh;
  display: ${props => props.isVisible ? 'block' : 'none'};

`
const ItemsWrapper = styled.div`
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
`
const Totals = styled.div``
const HRule = styled.hr``
const ItemTotal = styled.div`
  display: flex;
  justify-content: space-between;

`
const PriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0 0;
`


const Cart = () => {
    const { setCartVisible } = useCartActions()
    const { items, totalItems, totalPrice, cartVisible } = useAppSelector(state => state.cart)

    // hides Cart Windows when user clicks outside it
    const handleBackgroundClick = () => {
        setCartVisible()
    }

    return (
        <>
            <CartButton/>
            <BackgroundLayer isVisible={cartVisible} onClick={handleBackgroundClick}></BackgroundLayer>
            <Container isVisible={cartVisible}>
                <ItemsWrapper>
                    {!items.length &&
                        'Cart is empty'
                    }
                    {items.map(item => (
                        <CartItem item={item} key={item.id}/>
                    ))}
                </ItemsWrapper>
                <Totals>
                    <HRule/>
                    <ItemTotal>
                        <div>Items:</div>
                        <div>{totalItems}</div>
                    </ItemTotal>
                    <PriceTotal>
                        <div>Total:</div>
                        <div>{totalPrice}</div>
                    </PriceTotal>
                </Totals>
            </Container>
        </>
    );
};

export default Cart;