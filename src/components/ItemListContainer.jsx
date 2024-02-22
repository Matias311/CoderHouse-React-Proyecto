/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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

const ItemListContainer = () => {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    const q = id
      ? query(itemCollection, where("Categoria", "==", id))
      : itemCollection;
    getDocs(q).then((snapchot) => {
      setLoading(false);
      setproductos(
        snapchot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <div className="mt-10 pt-4 justify-center flex w-screen">
      {loading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
