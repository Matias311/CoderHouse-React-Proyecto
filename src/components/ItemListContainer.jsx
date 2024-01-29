import { useEffect, useState } from "react";
import arrproductos from "../listaproductos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setproductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrproductos.filter((item) => item.Categoria === id)
            : arrproductos
        );
      }, 2000);
    });
    promesa.then((data) => {
      setproductos(data);
    });
  }, [id]);
  return (
    <div className="mt-10 pt-4 justify-center flex w-screen">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
