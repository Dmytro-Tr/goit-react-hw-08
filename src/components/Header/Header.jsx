import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLogggedIn, selectUser } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const isLoggedIn = useSelector(selectIsLogggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <NavLink
        className={buildLinkClass}
        to="/"
      >
        Home
      </NavLink>
      <div className={s.box}>
        {isLoggedIn && <h3 className={s.title}>Welcome, {user.name}!</h3>}
        <NavLink
          className={buildLinkClass}
          to="/contacts"
        >
          Contacts
        </NavLink>
        {isLoggedIn ? (
          <button>Logout</button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
