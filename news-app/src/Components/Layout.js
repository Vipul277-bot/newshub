import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();

  // Pages that should NOT show navbar
  const hideNavbarPages = ["/", "/login", "/signup"];

  return (
    <>
      {!hideNavbarPages.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
}
