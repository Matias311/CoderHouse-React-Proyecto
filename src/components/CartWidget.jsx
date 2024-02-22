import { Link } from "react-router-dom";
import carrito from "../assets/shopping-cart.png";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { CantTotalProductos } = useContext(CartContext);
  return (
    <>
      {CantTotalProductos() > 0 && (
        <Link className="relative w-[30px] h-[30px]" to={"/cart"}>
          <img src={carrito} alt="icono carrito" />
          <span className="absolute left-[27px] top-[-7px] text-[#004e59] text-sm">
            {CantTotalProductos()}
          </span>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
