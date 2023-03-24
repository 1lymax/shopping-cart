import styled from "styled-components";
import React, {PropsWithChildren} from 'react';
import {ICartUnit} from "../../../types/cart.type";
import {PrimaryButton} from "../../../theme/PrimaryButton";
import {useCartItemRemoveButton} from "../../../hooks/Cart/useCartItemRemoveButton";

const RemoveButton = styled(PrimaryButton)`
margin-left: 10px;
`

type CartItemRemoveButtonProps = {
    item: ICartUnit
}

const CartItemRemoveButton = (props: PropsWithChildren<CartItemRemoveButtonProps>) => {
    const {item,children} = props
    const { onClick } = useCartItemRemoveButton(item)

    return (
        <RemoveButton onClick={onClick}>
            {children}
        </RemoveButton>
    );
};

export default CartItemRemoveButton;