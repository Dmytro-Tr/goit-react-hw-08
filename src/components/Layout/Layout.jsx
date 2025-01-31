import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";

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
