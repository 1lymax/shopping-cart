import React, {FC} from 'react';
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
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

interface ICartListProps {
}

const CartList: FC<ICartListProps> = () => {
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