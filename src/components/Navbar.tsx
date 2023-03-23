import React from 'react';
import styled from "styled-components";

import CartNavButton from "./Cart/CartNavButton";

const Container = styled.div`
  width: calc(100% - 30px);
  height: 40px;
  background-color: lightgray;
  box-shadow: 1px 1px 5px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const Label = styled.div``

const Navbar = () => {
    return (
        <Container>
            <Label>Drag'n'Drop Shopping Cart Example</Label>
            <CartNavButton/>
        </Container>
    );
};

export default Navbar;