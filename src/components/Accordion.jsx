import { useState } from "react";

const Accordion = ({ info, especificaciones }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full">
      <hr className="bg-[#004e59] border-0 h-[1px] w-full" />
      <button
        className="flex justify-between w-full py-1 px-3"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span>Detalle</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-linear text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p>{info}</p>
          {especificaciones ? (
            <ol>
              <li>{especificaciones.Categoria}</li>
              <li>{especificaciones.SubCategoria}</li>
              <li>{especificaciones.idioma}</li>
              <li>{especificaciones.Formato}</li>
              <li>{especificaciones.Paginas}</li>
            </ol>
          ) : (
            <span>no se encontraron</span>
          )}
        </div>
      </div>
      <hr className="bg-[#004e59] border-0 h-[1px] w-full" />
    </div>
  );
};

export default Accordion;
