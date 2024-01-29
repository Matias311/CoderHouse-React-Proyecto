import { NavLink } from "react-router-dom";
import PreNavBar from "./PreNavBar";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-items-center items-center pt-1">
      <PreNavBar />
      <div>
        <ul className="flex gap-4 pt-3">
          <li className="text-sm text-[#004e59]">
            <NavLink to="/">LIBROS</NavLink>
          </li>
          <li className="text-sm text-[#004e59]">
            <NavLink to="/category/Arte y Arquitectura">
              Arte y Arquitectura
            </NavLink>
          </li>
          <li className="text-sm text-[#004e59]">
            <NavLink to="/category/Infantil y Juvenil">
              INFANTIL Y JUVENIL
            </NavLink>
          </li>
          <li className="text-sm text-[#004e59]">
            <NavLink to="/category/Mundo Comic">MUNDO COMIC</NavLink>
          </li>
          <li className="text-sm text-[#004e59]">
            <NavLink to="/category/Entretencion y Manualidades">
              ENTRETENCION Y MANUALIDADES
            </NavLink>
          </li>
          <li className="text-sm text-[#004e59]">
            <NavLink to="/category/Ciencias">CIENCIAS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
