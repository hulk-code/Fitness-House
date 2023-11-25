import { Outlet } from "react-router-dom";
import Navber from "../../Pages/Home/SharedPage/Navber/Navber";
import Footer from "../../Pages/Home/SharedPage/Footer/Footer";



const Root = () => {
  return (
    <div >
     <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Root;