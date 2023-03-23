import React, {FC} from 'react';
import styled from "styled-components";

import {Button} from "../../theme/Button";
import {IProduct} from "../../types/product.type";
import {useAppSelector} from "../../hooks/appHook";
import {useAddToCart} from "../../hooks/Cart/useAddToCart";

const AddButton = styled(Button)``


interface IAddToCartButtonProps {
    product: IProduct
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({ product }) => {
    const buttonProps = useAddToCart(product)
    const { items } = useAppSelector(state => state.cart)
    const isInCart = items.find(item => item.id === product.id)


    return (
        <AddButton {...buttonProps}>
            {isInCart ? 'Already added' : 'Add to Cart'}
        </AddButton>
    );
};

export default AddToCartButton;