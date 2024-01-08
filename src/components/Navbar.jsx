import PreNavBar from "./PreNavBar";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-items-center items-center pt-1">
      <PreNavBar />
      <div>
        <ul className="flex gap-4 pt-3">
          <li className="text-sm text-[#004e59]">
            <a href="#">LIBROS</a>
          </li>
          <li className="text-sm text-[#004e59]">
            <a href="#">LIBROS IMPORTADOS HASTA 50% OFF</a>
          </li>
          <li className="text-sm text-[#004e59]">
            <a href="#">INFANTIL Y JUVENIL</a>
          </li>
          <li className="text-sm text-[#004e59]">
            <a href="#">JUEGOS Y ACCESORIOS</a>
          </li>
          <li className="text-sm text-[#004e59]">
            <a href="#">TEXTOS ESCOLARES</a>
          </li>
          <li className="text-sm text-[#004e59]">
            <a href="#">PROMOCIONES</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
