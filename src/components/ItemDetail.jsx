import Accordion from "./Accordion";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  function descuento(producto) {
    if (producto.Descuento > 0) {
      const descuento = (producto.Descuento - 100) / 100;
      const precio = producto.Precio.toFixed(3);
      const precioNeto = precio * (descuento * -1);
      return (
        <div className="flex gap-1">
          <h3 className="text-red-400">${precioNeto.toFixed(3)}</h3>
          <h4 className="line-through text-xs">
            ${producto.Precio.toFixed(3)}
          </h4>
        </div>
      );
    } else {
      return <h3>${producto.Precio.toFixed(3)}</h3>;
    }
  }

  return (
    <div className="flex">
      <img src={producto.img} alt={producto.nombre} />
      <div className="flex flex-col">
        <h1>{producto.nombre}</h1>
        <h2>{producto.Autor}</h2>
        <p>Stock disponible {producto.stock} unidades</p>
        {producto.Precio ? descuento(producto) : producto.Precio}
        <ItemCount stock={producto.stock} />
        <Accordion
          info={producto.Reseña}
          especificaciones={producto.Especificaciones}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
