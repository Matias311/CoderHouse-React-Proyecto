import { Link } from "react-router-dom";
import logo from "../assets/logolibro.png";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const PreNavBar = () => {
  const { setSearch } = useContext(CartContext);

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
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
      <CartWidget />
    </div>
  );
};

export default PreNavBar;
