import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } =
    useContext(CartContext);

  if (CantTotalProductos() === 0) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center gap-3">
        <h1>&#10060;</h1>
        <h1>No hay productos en el carrito</h1>
        <Link to={"/"} className="border p-2">
          Volver a la pagina principal
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border p-4 w-[600px]">
          <img
            src={item.img}
            alt={item.nombre}
            className="w-[200px] h-[200px]"
          />
          <div>
            <h1>{item.nombre}</h1>
            <h2>${parseFloat(item.Precio).toFixed(3)}</h2>
            <h3>
              <span className="font-bold">Cantidad:</span> {item.quantity}
            </h3>
            <button onClick={() => removeItem(item)} className="border p-2">
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-4">
        <h1>Total: ${SumaTotalProductos().toFixed(3)}</h1>
        <Link to={"/checkout"} className="border p-2">
          Completar compra
        </Link>
        <button className="border p-2" onClick={clear}>
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
}
