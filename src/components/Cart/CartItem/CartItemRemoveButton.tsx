import styled from "styled-components";
import React, {PropsWithChildren} from 'react';
import {ICartUnit} from "../../../types/cart.type";
import {useCartActions} from "../../../hooks/actions";
import {Button} from "../../../theme/Button";

const RemoveButton = styled(Button)`
margin-left: 10px;
`

type CartItemRemoveButtonProps = {
    item: ICartUnit
}

const CartItemRemoveButton = (props: PropsWithChildren<CartItemRemoveButtonProps>) => {
    const { removeItem, setTotalItems, setTotalPrice } = useCartActions()

    const handleClick = () => {
        removeItem(props.item)
        setTotalItems()
        setTotalPrice()
    }

    return (
        <RemoveButton onClick={handleClick}>
            {props.children}
        </RemoveButton>
    );
};

export default CartItemRemoveButton;