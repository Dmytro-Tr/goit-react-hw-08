import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
