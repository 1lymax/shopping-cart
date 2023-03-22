import React, {useEffect} from 'react';
import styled from "styled-components";
import ProductItem from "./ProductItem";
import {sagaActions} from "../store/saga/actions";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/appHook";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProductPage = () => {
    const {products} = useAppSelector(state => state.product)
    const dispatch = useDispatch()

    // Initialize product list from api
    useEffect(() => {
        dispatch({ type: sagaActions.FETCH_ALL_PRODUCTS, payload: { limit: 20, offset: 0 } })
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            {products.map(product => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </Container>
    );
};

export default ProductPage;