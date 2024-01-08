import carrito from "../assets/shopping-cart.png";
const CartWidget = () => {
  return (
    <button className="relative w-[30px] h-[30px]">
      <img src={carrito} alt="icono carrito" />
      <span className="absolute left-[27px] top-[-7px] text-[#004e59] text-sm">
        2
      </span>
    </button>
  );
};

export default CartWidget;
