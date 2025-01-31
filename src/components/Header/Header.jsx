import s from "./header.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

// saliwan321@mail.com

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <div className={s.home_box}>
        {/* <NavLink to="/">
          <img
            src="/public/phonebook_logo.png"
            alt="logo"
            width={45}
          />
        </NavLink>
        <NavLink
          className={buildLinkClass}
          to="/"
        >
          Home
        </NavLink> */}
      </div>
      <div className={s.box}>
        {/* <NavLink
          className={buildLinkClass}
          to="/contacts"
        >
          Contacts
        </NavLink> */}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <AuthNav />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
