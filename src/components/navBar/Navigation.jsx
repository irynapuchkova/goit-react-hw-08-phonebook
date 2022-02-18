import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import authSelectors from "../../redux/auth/auth-selectors";

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

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};

export default Navigation;
