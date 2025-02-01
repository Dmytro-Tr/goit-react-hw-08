import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <img src="/public/phonebook_logo.png" alt="logo" width={45} />
      </NavLink>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
