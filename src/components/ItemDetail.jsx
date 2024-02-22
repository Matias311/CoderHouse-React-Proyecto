/* eslint-disable react/prop-types */
import { useContext } from "react";
import Accordion from "./Accordion";
import ItemCount from "./ItemCount";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  function onAdd(quantity) {
    addItem(producto, quantity);
  }

  function descuento(producto) {
    if (producto.Descuento > 0) {
      const descuento = (producto.Descuento - 100) / 100;
      const precio = producto.Precio.toFixed(3);
      const precioNeto = precio * (descuento * -1);
      return (
        <div className="flex gap-1  w-[30%] py-5 mt-3">
          <h3 className="text-red-400 text-xl font-bold">
            ${precioNeto.toFixed(3)}
          </h3>
          <div className="relative w-13">
            <h4 className="line-through text-xs text-[#004e59] ">
              ${producto.Precio.toFixed(3)}
            </h4>
            <div className="absolute top-[-10px] left-[50px] z-10 bg-red-500 rounded-full  flex w-[35px] h-[35px] items-center justify-center">
              <p className="text-white text-sm font-semibold">
                {producto.Descuento}%
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h3 className="text-xl font-bold py-5 mt-1 text-[#004e59]">
          ${producto.Precio.toFixed(3)}
        </h3>
      );
    }
  }

  return (
    <div className="flex py-10 justify-center w-full">
      <img src={producto.img} alt={producto.nombre} className=" h-[500px]" />
      <div className="flex flex-col items-start w-1/2">
        <h1 className="text-[#004e59] text-2xl">{producto.nombre}</h1>
        <h2 className="text-[#004e59] pt-3 opacity-70 italic">
          {producto.Autor}
        </h2>
        <p className="text-[#004e59] pt-3 text-xs">
          Stock disponible {producto.stock} unidades
        </p>
        {producto.Precio ? descuento(producto) : producto.Precio}
        <ItemCount stock={producto.stock} onAdd={onAdd} />
        <Accordion
          info={producto.Reseña}
          especificaciones={producto.Especificaciones}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
