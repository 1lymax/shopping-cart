import styled from "styled-components";
import {theme} from "./index";

export const Input = styled.input`
  border: ${theme.input.border};
  padding: ${theme.input.padding};
  margin: ${theme.input.margin};
  border-radius: ${theme.input.borderRadius};
  box-shadow: ${theme.input.boxShadow};
`