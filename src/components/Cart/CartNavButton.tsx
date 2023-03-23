import React from 'react';
import styled from "styled-components";

import {useAppSelector} from "../../hooks/appHook";
import {useCartActions} from "../../hooks/actions";

interface StyledContainerProps {
    // true when starting to drag a product card
    isDragActive: boolean
}

const Container = styled.div<StyledContainerProps>`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  // using transparent border instead of none to avoid small moving of Div element
  border: ${props => props.isDragActive ? '3px dashed dodgerblue' : '3px solid transparent'};
`

const CartNavButton = () => {
    const { dragActive, items } = useAppSelector(state => state.cart)
    const { setCartVisible, addToCart, setTotalPrice, setTotalItems } = useCartActions()

    const handleClick = () => {
        setCartVisible()
    }

    // parse string object from data transfer to JSON and adding it to the cart
    // also recalculating totals in the cart
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const product = e.dataTransfer.getData("product")
        const productObj = JSON.parse(product)
        addToCart(productObj)
        setTotalPrice()
        setTotalItems()
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    // isDragActive needs to draw a dotted border around a Cart button
    return (
        <Container onClick={handleClick}
                   isDragActive={dragActive}
                   onDragOver={handleDragOver}
                   onDrop={handleDrop}
        >
            My Cart ({items.length})
        </Container>
    );
};

export default CartNavButton;