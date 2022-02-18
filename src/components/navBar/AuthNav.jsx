import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

const StyledNavLink = styled(NavLink)({
  padding: "16px",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "20px",
  color: "blue",
  '&[aria-current="page"]': {
    color: "tomato",
  },
});

const Nav = styled.nav`
  display: flex;
`;

export default function AuthNav() {
  return (
    <Nav>
      <StyledNavLink to="/register">Register</StyledNavLink>

      <StyledNavLink to="/login">Login</StyledNavLink>
    </Nav>
  );
}
