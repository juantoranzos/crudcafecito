import { Routes, Route } from "react-router-dom";
import EditarProducto from "../views/producto/EditarProducto"
import CrearProducto from "../views/producto/CrearProducto";
import Administrador from "../views/Administrador";
const RutasAdministrador = ()=>{
    return(
        <>
        <Routes>
        <Route exact path="/" element={<Administrador></Administrador>} />
          <Route exact path="/crear" element={<CrearProducto></CrearProducto>} />
          <Route exact path="/editar" element={<EditarProducto></EditarProducto>} />
        </Routes>
        </>

    );
};
export default RutasAdministrador;