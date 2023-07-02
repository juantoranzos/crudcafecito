import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/common/Menu"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import Error404 from './components/views/Error404';
import CrearProducto from './components/views/producto/CrearProducto';
import Administrador from './components/views/Administrador';
import Footer from './components/common/Footer';
import Registro from './components/views/Registro';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>} />
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="/administrador" element={<Administrador></Administrador>} />
          <Route exact path="/administrador/crear" element={<CrearProducto></CrearProducto>} />
          <Route exact path="/registro" element={<Registro></Registro>} />
          <Route exact path="*" element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
