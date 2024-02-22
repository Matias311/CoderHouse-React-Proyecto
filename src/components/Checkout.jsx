import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const { cart, CantTotalProductos, SumaTotalProductos, clear } =
    useContext(CartContext);

  if (CantTotalProductos() === 0) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center gap-3">
        <h1>&#10060;</h1>
        <h1>No hay productos</h1>
        <Link to={"/"} className="border p-2">
          Volver a la pagina principal
        </Link>
      </div>
    );
  }

  const generateOrder = (e) => {
    e.preventDefault();
    if (nombre.length < 4 || email.length < 4 || telefono.length < 9) {
      return alert("Complete los campos correctamente");
    }
    const buyer = {
      nombre: nombre,
      email: email,
      telefono: telefono,
    };
    const items = cart.map((item) => ({
      id: item.idx,
      nombre: item.nombre,
      Precio: item.Precio,
    }));
    const fecha = new Date();
    const date = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}/${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = SumaTotalProductos();
    const order = { buyer, items, date, total };
    const db = getFirestore();
    const ordercollection = collection(db, "orders");
    addDoc(ordercollection, order).then((resultado) => {
      alert(
        `Compra realizada con exito, su numero de orden es: ${resultado.id}`
      );
      clear();
    });
  };

  return (
    <div className="flex  items-center justify-center w-full h-full gap-4">
      <div className="flex flex-col gap-3 ">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex  items-center border p-4 w-[400px]"
          >
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
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h1>Total: ${SumaTotalProductos().toFixed(3)}</h1>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-1 rounded"
            onInput={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-1 rounded"
            onInput={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Telefono"
            className="border p-1 rounded"
            onInput={(e) => setTelefono(e.target.value)}
          />
          <button
            className="border p-2 rounded"
            type="submit"
            onClick={generateOrder}
          >
            Completar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
