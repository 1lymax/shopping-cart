import React, {FC} from 'react';
import styled from "styled-components";

import {PrimaryButton} from "../../theme/PrimaryButton";
import {IProduct} from "../../types/product.type";
import {useAppSelector} from "../../hooks/appHook";
import {useAddToCart} from "../../hooks/Cart/useAddToCart";

const AddButton = styled(PrimaryButton)``


interface IAddToCartButtonProps {
    product: IProduct
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({ product }) => {
    const { onClick } = useAddToCart(product)
    const { items } = useAppSelector(state => state.cart)
    const isInCart = items.find(item => item.id === product.id)


    return (
        <AddButton onClick={onClick}>
            {isInCart ? 'Already added' : 'Add to Cart'}
        </AddButton>
    );
};

export default AddToCartButton;