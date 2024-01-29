import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);
  const [itemstock, setItemStock] = useState(stock);

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

  function onAdd() {
    if (itemstock > 0) {
      setItemStock(itemstock - counter);
      setCounter(1);
      console.log("Te quedan " + (itemstock - counter));
    } else {
      setCounter(0);
      console.log("No puedes comprar esto, no hay stock disponibles");
    }
  }

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="flex gap-2">
      <div className="flex ">
        <input
          placeholder={counter}
          disabled
          className="border w-12 text-center p-1"
        />
        <div>
          <div className="border w-5 text-center" onClick={incrementar}>
            +
          </div>
          <div className="border w-5 text-center" onClick={decrementar}>
            -
          </div>
        </div>
      </div>
      <button className="border" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;