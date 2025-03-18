import { Outlet, useLocation } from "react-router-dom";
// Files : Components : Shared
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  // console.log(location);

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  // console.log(noHeaderFooter);

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}

      <Outlet></Outlet>

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
