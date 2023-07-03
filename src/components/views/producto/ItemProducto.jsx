import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { eliminarProducto, obtenerProductos } from "../../helpers/queries"

const ItemProducto = ({producto, setProductos})=>{
    const borrarProducto = ()=>{
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "No se puede revertir este paso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
             
              // aqui tengo que hacer la peticion delete
              eliminarProducto(producto.id).then((respuesta)=>{
                if(respuesta.status === 200){
                    Swal.fire(
                        'Producto eliminado',
                        `el producto ${producto.nombreProducto} fue eliminado`,
                        'success'
                      );
                    // actualizar el state  producto del componente administrador
                    obtenerProductos().then((respuesta)=> setProductos(respuesta));
                }else{
                    Swal.fire(
                        'Se produjo un error',
                        'Intente mas tarde',
                        'error'
                      )
                }

              });
            }
          })

    }

    return(
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombreProducto}</td>
            <td> {producto.precio}</td>
            <td>{producto.imagen}</td>
            <td>{producto.categoria}</td>
            <td>
                <Link className="btn btn-warning" to={`/administrador/editar/${producto.id}`}>Editar</Link>
                <Button variant="danger" onClick={borrarProducto}>Borrar</Button>
            </td>
        </tr>
    )

}
export default ItemProducto