import React, {FC} from 'react';
import styled from "styled-components";

import {IProduct} from "../types/product.type";
import {useCartActions} from "../hooks/actions";
import AddToCartButton from "./Cart/AddToCartButton";
import {theme} from "../theme";
import {Card} from "../theme/Card";


const Container = styled(Card)`
  width: 150px;
  height: 200px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 1.2rem;
  color: ${theme.headerColor};
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


interface IProductItemProps {
    product: IProduct
}

const ProductItem: FC<IProductItemProps> = (props) => {
    const { product } = props
    const { setDragActive } = useCartActions()


    // Starting to drag product card. Set whole product object to transfer data to simplify adding to cart
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, product: IProduct) => {
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
                    <AddToCartButton product={product} />
                </ButtonContainer>
            </Footer>
        </Container>
    );
};

export default ProductItem;