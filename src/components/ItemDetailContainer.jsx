import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [producto, setproducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then((doc) => {
      setLoading(false);
      setproducto({ id: doc.id, ...doc.data() });
    });
  });

  return (
    <div className="flex justify-center w-1/2 items-center">
      {loading ? <Loading /> : <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;
