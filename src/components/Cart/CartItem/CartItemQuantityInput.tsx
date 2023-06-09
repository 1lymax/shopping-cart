import React, {FC} from 'react';
import styled from "styled-components";
import {ICartUnit} from "../../../types/cart.type";
import {Input} from "../../../theme/Input";
import {useCartItemQuantityInput} from "../../../hooks/Cart/useCartItemQuantityInput";

const QuantityInput = styled(Input)`
  width: 25px;
  text-align: center;
`

interface ICartItemQuantityInputProps {
    item: ICartUnit
}

const CartItemQuantityInput: FC<ICartItemQuantityInputProps> = ({ item }) => {
    const { value, onChange } = useCartItemQuantityInput(item)

    return (
        <QuantityInput onChange={onChange} value={value}/>
    );
};

export default CartItemQuantityInput;