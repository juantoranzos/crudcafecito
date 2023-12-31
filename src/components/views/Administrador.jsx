import {  Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {

  const [productos, setProductos] = useState([]);
  useEffect(()=>{
     obtenerProductos().then((respuesta)=>{
     console.log(respuesta);
     setProductos(respuesta);}
     )
  }, [])

  // Contenido del componente Administrador
  return(
    <section className="container mainSection">
      <div className="d-flex justiify-content-between  mt-5">
        <h1 className="display-4">Productos disponibles</h1>

        <Link className="btn btn-primary " to='/administrador/crear'> 
        
        Agregar 
        
        </Link>

      </div>
      <hr />
      <Table responsive striped border hover>
      <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto)=>  <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto>
              )
            }
          </tbody>

      </Table>
    </section>
   )
};

export default Administrador
