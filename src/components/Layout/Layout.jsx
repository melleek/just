import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { Links } from "../shared/Links";

export function Layout() {
  return (
    <>
      <Navbar />
      <Links />
      <Outlet />
      <Footer />
    </>
  );
}
