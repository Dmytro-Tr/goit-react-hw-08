import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

// saliwan321@mail.com

const Header = () => {
  const isLoggedIn = useSelector(selectIsLogggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
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
