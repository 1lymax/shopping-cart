import React, {FC} from 'react';
import styled from "styled-components";

import {CartUnit} from "../../types/cart.type";
import {useCartActions} from "../../hooks/actions";


const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`
const Title = styled.div`
  font-size: 1rem;
  max-width: 150px;
`
const Price = styled.div`
  font-size: 0.8rem;
  color: gray;;
`
const ActionsWrapper = styled.div``
const Decrement = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
const Increment = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const QuantityInput = styled.input`
  width: 25px;
  text-align: center;
  border: 1px solid lightgray;
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
  box-shadow: inset 1px 1px 3px #c7c7c7;
`
const RemoveButton = styled.button`
  margin-left: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #e7e7e7;
`

interface CartItemProps {
    item: CartUnit
}

const CartItem: FC<CartItemProps> = (props) => {
    const { item } = props
    const {
        decrementQuantity,
        incrementQuantity,
        setQuantity,
        setTotalItems,
        setTotalPrice,
        removeItem
    } = useCartActions()

    const handleDecrement =() => {
        decrementQuantity(item)
        setTotals()
    }

    const handleIncrement =() => {
        incrementQuantity(item)
        setTotals()
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedQuantity = parseInt(e.target.value)
        const { quantity, ...rest } = item
        setQuantity({ ...rest, quantity: updatedQuantity })
        setTotals()
    }

    const handleRemoveItem = () => {
        removeItem(item)
        setTotals()
    }

    const setTotals = () => {
        setTotalItems()
        setTotalPrice()
    }

    return (
        <Container>
            <Title>
                {item.title}
                <Price>
                    {item.price}
                </Price>
            </Title>
            <ActionsWrapper>
                <Decrement onClick={handleDecrement}>-</Decrement>
                <QuantityInput value={item.quantity} onChange={handleQuantityChange}/>
                <Increment onClick={handleIncrement}>+</Increment>
                <RemoveButton onClick={handleRemoveItem}>Del</RemoveButton>
            </ActionsWrapper>

        </Container>
    );
};

export default CartItem;