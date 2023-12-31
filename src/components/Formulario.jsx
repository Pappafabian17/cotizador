import { Fragment, useContext } from "react";
import { Marcas, Years, Planes } from "../constants";
import CotizadorContext from "../context/CotizadorProvider";
const Formulario = () => {
  const {setModal} = useContext(CotizadorContext)
  return (
    <>
    <button
      onClick={()=>setModal(true)}
    >
      Cambiar modal de Context
    </button>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value=""> -- Selecciona Marca -- </option>
            {Marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value=""> -- Selecciona Año -- </option>
            {Years.map((year) => (
              <option 
              key={year} 
              value={year}>
                      {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elegi un Plan
          </label>
          <div className="flex gap-3 items-center">
            {Planes.map(plan=>(
              <Fragment key={plan.id} >
                <label>
                  {plan.nombre}
                </label>
                <input
                type="radio"

                name="plan"
                value={plan.id}
              />
              </Fragment>
            ))}
          </div>
        </div>
        <input
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold  "
              value="cotizar"
       />
      </form>
    </>
  );
};

export default Formulario;
