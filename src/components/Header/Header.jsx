import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div className={s.wrapper}>
      <NavLink
        className={buildLinkClass}
        to="/"
      >
        Home
      </NavLink>
      <div className={s.box}>
        <NavLink
          className={buildLinkClass}
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          to="/register"
          className={buildLinkClass}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={buildLinkClass}
        >
          Login
        </NavLink>
      </div>{" "}
    </div>
  );
};

export default Header;
