import { Link } from "react-router-dom";
import logo from "../assets/logolibro.png";
import search from "../assets/search.png";
import CartWidget from "./CartWidget";

const PreNavBar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="font-medium text-center text-xl text-[#004e59]">
          BookStore
        </h1>
      </Link>
      <div className="flex grow justify-center items-center">
        <input
          type="text"
          placeholder="Buscalo, Compralo, Leelo"
          className="border pl-5 w-2/4 h-[30px] focus:outline-none border-[#004e59] placeholder-[#004e59] text-sm"
        />
        <div className=" bg-[#004e59] flex justify-center w-[30px] h-[30px] cursor-pointer">
          <img
            src={search}
            alt="lupa"
            className="w-[20px] h-[20px] self-center"
          />
        </div>
      </div>
      <CartWidget />
    </div>
  );
};

export default PreNavBar;
