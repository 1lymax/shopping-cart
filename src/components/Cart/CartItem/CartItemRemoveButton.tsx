import styled from "styled-components";
import React, {PropsWithChildren} from 'react';
import {ICartUnit} from "../../../types/cart.type";
import {Button} from "../../../theme/Button";
import {useCartItemRemoveButton} from "../../../hooks/Cart/useCartItemRemoveButton";

const RemoveButton = styled(Button)`
margin-left: 10px;
`

type CartItemRemoveButtonProps = {
    item: ICartUnit
}

const CartItemRemoveButton = (props: PropsWithChildren<CartItemRemoveButtonProps>) => {
    const {item,children} = props
    const buttonProps = useCartItemRemoveButton(item)

    return (
        <RemoveButton {...buttonProps}>
            {children}
        </RemoveButton>
    );
};

export default CartItemRemoveButton;