import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-screen h-screen items-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
