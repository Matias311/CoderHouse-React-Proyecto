/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [itemstock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(false);

  function incrementar() {
    if (counter < itemstock) {
      setCounter(counter + 1);
    }
  }

  function decrementar() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  function AddToCart() {
    if (itemstock > 0) {
      setItemStock(itemstock - counter);
      setCounter(1);
      onAdd(counter);
      setItemAdd(true);
    } else {
      setCounter(0);
      console.log("No puedes comprar esto, no hay stock disponibles");
    }
  }

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="flex gap-2 select-none pt-2 pb-10">
      <div className="flex ">
        <input
          placeholder={counter}
          disabled
          className="border w-12 text-center p-1 placeholder-[#004e59] border-[#004e59]"
        />
        <div>
          <div
            className="border w-5 text-center cursor-pointer text-[#004e59] border-[#004e59]"
            onClick={incrementar}
          >
            +
          </div>
          <div
            className="border w-5 text-center cursor-pointer text-[#004e59] border-[#004e59]"
            onClick={decrementar}
          >
            -
          </div>
        </div>
      </div>
      {itemAdd ? (
        <Link
          to={"/cart"}
          className="border py-1 px-5 flex items-center text-[#004e59] border-[#004e59] text-center"
        >
          Terminar Compra
        </Link>
      ) : (
        <button
          className="border py-1 px-5 text-[#004e59] border-[#004e59]"
          onClick={AddToCart}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
export default ItemCount;
