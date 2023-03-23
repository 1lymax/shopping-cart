import React, {FC} from 'react';
import styled from "styled-components";

import {IProduct} from "../../types/product.type";
import {useAppSelector} from "../../hooks/appHook";
import {useCartActions} from "../../hooks/actions";

const Container = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #e7e7e7;
`


interface IAddToCartButtonProps {
    product: IProduct
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({ product }) => {
    const { items } = useAppSelector(state => state.cart)
    const {addToCart, setTotalItems, setTotalPrice} = useCartActions()
    const isInCart = items.find(item => item.id === product.id)

    // When adding product to cart also recalculate totals with setTotalPrice() and setTotalItems()
    const handleClick = () => {
        // because of quantity is not a prop of product we set it manually
        addToCart({ ...product, quantity: 1 })
        setTotalPrice()
        setTotalItems()
    }

    return (
        <Container onClick={handleClick}>
            {isInCart ? 'Already added' : 'Add to Cart'}
        </Container>
    );
};

export default AddToCartButton;