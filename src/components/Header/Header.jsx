import { NavLink } from "react-router-dom";
import s from "./header.module.css";

const Header = () => {
  return (
    <div>
      {" "}
      <div className={s.wrapper}>
        <NavLink
          className={s.home}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={s.contacts}
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
