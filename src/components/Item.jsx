import { Link } from "react-router-dom";

const Item = ({ item }) => {
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
          <h4 className="line-through text-xs">${item.Precio.toFixed(3)}</h4>
        </div>
      );
    }
  }
  return (
    <div className="borde border-black shadow-md flex flex-col justify-center flex-wrap w-[300px] p-3 relative">
      <Link to={"/item/" + item.id} className="flex flex-col items-center">
        <img src={item.img} alt={item.nombre} className="w-[250px] h-[250px]" />
        <h1 className="self-start pt-2">{item.nombre}</h1>
        <h2 className="self-start">{item.Autor}</h2>
        {item.Descuento > 0 ? (
          descuento(item)
        ) : (
          <h3>${item.Precio.toFixed(3)}</h3>
        )}
        <button className="border p-[2px] rounded mt-1">
          Agregar a Carrito
        </button>
      </Link>
    </div>
  );
};

export default Item;
