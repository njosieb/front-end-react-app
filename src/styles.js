import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: red;
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;