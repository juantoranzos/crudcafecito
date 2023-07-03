import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/common/Menu"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import DetalleProducto from './components/views/DetalleProducto'
import Error404 from './components/views/Error404';
import CrearProducto from './components/views/producto/CrearProducto';
import Administrador from './components/views/Administrador';
import Footer from './components/common/Footer';
import Registro from './components/views/Registro';
import { useState } from 'react';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';


function App() {
   const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);
  return (
    <>
      <BrowserRouter>
       <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>} />
          <Route exact path="/detalle" element={<DetalleProducto></DetalleProducto>} />
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} ></Login>} />
         <Route path='/administrador/*' element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
         }></Route>
          <Route exact path="/registro" element={<Registro></Registro>} />
          <Route exact path="*" element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
