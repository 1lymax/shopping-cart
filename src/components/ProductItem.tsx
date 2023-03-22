import React, {FC} from 'react';
import {Product} from "../types/product.type";
import styled from "styled-components";
import {useCartActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/appHook";


const Container = styled.div`
  width: 150px;
  height: 200px;
  padding: 20px;
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #c7c7c7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 1.2rem;
  color: dodgerblue;
`
const Footer = styled.div`
  position: relative;
  bottom: 0;
`
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`
const PriceLabel = styled.div``
const Price = styled.div`
  font-weight: 800;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`
const AddToCartButton = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #e7e7e7;
`


interface ProductItemProps {
    product: Product
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { product } = props
    const { items } = useAppSelector(state => state.cart)
    const { addToCart, setTotalItems, setTotalPrice, setDragActive } = useCartActions()
    const isInCart = items.find(item => item.id === product.id)

    // When adding product to cart also recalculate totals with setTotalPrice() and setTotalItems()
    const handleAddToCart = () => {
        // because of quantity is not a prop of product we set it manually
        addToCart({ ...product, quantity: 1 })
        setTotalPrice()
        setTotalItems()
    }

    // Starting to drag product card. Set whole product object to transfer data to simplify adding to cart
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, product: Product) => {
        // Because of quantity is not a prop of product we set it manually
        e.dataTransfer.setData("product", JSON.stringify({ ...product, quantity: 1 }))
        setDragActive(true)
    }

    // We drop an item, so we need to set dragActive to false value to hide border around Cart Button
    const handleDragEnd = () => {
        setDragActive(false)
    }

    return (
        <Container draggable
                   id={product.id.toString()}
                   onDragStart={(e) => handleDragStart(e, product)}
                   onDragEnd={handleDragEnd}
        >
            <Title>{product.title}</Title>
            <Footer>
                <PriceWrapper>
                    <PriceLabel>Price:</PriceLabel>
                    <Price>{product.price}</Price>
                </PriceWrapper>
                <ButtonContainer>
                    <AddToCartButton onClick={handleAddToCart}>
                        {isInCart ? 'Already added' : 'Add to Cart'}
                    </AddToCartButton>
                </ButtonContainer>
            </Footer>
        </Container>
    );
};

export default ProductItem;