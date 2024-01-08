import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <Navbar />
      <ItemListContainer
        greeting={
          "No se han encontrado los productos, por favor vuelva a cargar la pagina"
        }
      />
    </div>
  );
}

export default App;
