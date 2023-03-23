import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../hooks/appHook";
import {useCartActions} from "../../hooks/actions";
import CartList from "./CartList";


interface IStyledContainerProps {
    isVisible: boolean
}

const Container = styled.div<IStyledContainerProps>`
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
const BackgroundLayer = styled.div<IStyledContainerProps>`
  position: absolute;
  z-index: 2;
  inset: auto 0 0;
  height: 100vh;
  display: ${props => props.isVisible ? 'block' : 'none'};
`


const CartFloatingContainer = () => {
    const { setCartVisible } = useCartActions()
    const { cartVisible } = useAppSelector(state => state.cart)

    // hides Cart Windows when user clicks outside it
    const handleBackgroundClick = () => {
        setCartVisible()
    }

    return (
        <>
            <BackgroundLayer isVisible={cartVisible} onClick={handleBackgroundClick}></BackgroundLayer>
            <Container isVisible={cartVisible}>
                <CartList/>
            </Container>
        </>
    );
};

export default CartFloatingContainer;