/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Item = ({ item }) => {
  const { addItem } = useContext(CartContext);
  function descuento(item) {
    if (item.Descuento > 0) {
      const descuento = (item.Descuento - 100) / 100;
      const precio = item.Precio.toFixed(3);
      const precioNeto = precio * (descuento * -1);
      return (
        <div className="flex gap-1">
          <div className="absolute top-0 right-[-10px] z-10 bg-red-500 rounded-full  flex w-[35px] h-[35px] items-center justify-center">
            <p className="text-white text-sm font-semibold">
              {item.Descuento}%
            </p>
          </div>
          <h3 className="text-red-400">${precioNeto.toFixed(3)}</h3>
          <h4 className="line-through text-xs text-[#004e59]">
            ${item.Precio.toFixed(3)}
          </h4>
        </div>
      );
    }
  }
  return (
    <div className="borde border-black shadow-md flex flex-col justify-center flex-wrap w-[300px] h-[450px] p-3 relative">
      <Link
        to={"/item/" + item.id}
        className="flex flex-col items-center justify-center"
      >
        <img src={item.img} alt={item.nombre} className="w-[250px] h-[250px]" />
        <h1 className="self-start pt-2 text-pretty text-base text-[#004e59]">
          {item.nombre}
        </h1>
        <h2 className="self-start text-xs opacity-70 italic py-1 text-[#004e59]">
          {item.Autor}
        </h2>
        {item.Descuento > 0 ? (
          descuento(item)
        ) : (
          <h3 className="text-[#004e59]">${item.Precio.toFixed(3)}</h3>
        )}
      </Link>
      <button
        className="border py-1 px-3 rounded mt-1 text-[#004e59] border-[#004e59]"
        onClick={() => addItem(item, 1)}
      >
        Agregar a Carrito
      </button>
    </div>
  );
};

export default Item;
