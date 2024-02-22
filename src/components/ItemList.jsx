/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap gap-10 w-[50%] justify-center md:w-[80%]">
      {productos.map((el) => (
        <Item item={el} key={el.id} />
      ))}
    </div>
  );
};

export default ItemList;
