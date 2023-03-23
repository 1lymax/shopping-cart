import React, {FC} from 'react';
import CartItem from "./CartItem/CartItem";
import styled from "styled-components";
import {useAppSelector} from "../../hooks/appHook";

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

interface ICartList {
}

const CartList: FC<ICartList> = () => {
    const {items, totalItems, totalPrice} = useAppSelector(state => state.cart)
    return (
        <div>
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
        </div>
    );
};

export default CartList;