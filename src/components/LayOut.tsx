import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SearchArea from "./SearchArea";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
          <Navbar />
          <SearchArea/>

      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      
    </div>
  );
}

export default LayOut