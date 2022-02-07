import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>

      <NavLink to="/movies" className={setActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
