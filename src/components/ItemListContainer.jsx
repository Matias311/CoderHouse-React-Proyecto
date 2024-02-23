/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import Loading from "./Loading";
import { CartContext } from "../Context/CartContext";

const ItemListContainer = () => {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { search } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    let q;
    if (id) {
      q = query(itemCollection, where("Categoria", "==", id));
    } else if (search) {
      q = query(itemCollection, where("nombre", ">=", search));
    } else {
      q = itemCollection;
    }
    getDocs(q).then((snapchot) => {
      setLoading(false);
      setproductos(
        snapchot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id, search]);

  return (
    <div className="mt-10 pt-4 justify-center flex w-screen">
      {loading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
