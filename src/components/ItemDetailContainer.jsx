import { useEffect, useState } from "react";
import arrproductos from "../listaproductos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setproducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        let producto = arrproductos.find((item) => item.id == parseInt(id));
        resolve(producto);
      }),
        2000;
    });
    promesa.then((data) => {
      setproducto(data);
    });
  }, [id]);
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
