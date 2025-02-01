import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./authNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.home_box}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
