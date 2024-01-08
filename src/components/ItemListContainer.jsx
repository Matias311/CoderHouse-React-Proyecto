const ItemListContainer = ({ greeting }) => {
  return (
    <main className="flex flex-col justify-items-center items-center mt-10 p-4 w-2/4 rounded text-white bg-[#004e59]">
      <h1>{greeting}</h1>
    </main>
  );
};

export default ItemListContainer;
