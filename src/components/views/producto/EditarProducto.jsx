import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { consultaEditarProducto, obtenerProducto } from "../../helpers/queries";
import Swal from "sweetalert2";


const EditarProducto  =  () =>{
  const {id} =  useParams();
  const navegacion = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    }= useForm()

    useEffect(()=>{
         obtenerProducto(id).then((respuesta)=>{
                setValue('nombreProducto', respuesta.nombreProducto)
                setValue('precio', respuesta.precio)
                setValue('categoria', respuesta.categoria)
                setValue('imagen', respuesta.imagen)
            
         })
    },[])

    const onSubmit = (productoEditado) =>{
        console.log(productoEditado);
        consultaEditarProducto(productoEditado, id).then((respuesta)=>{

            if( respuesta && respuesta.status === 200){
                Swal.fire('Producto actualizado', `El producto: ${productoEditado.nombreProducto}fue editado correctamente`, 'success')
                navegacion('/administrador')

            }else{
                Swal.fire('Ocurrio un error', `El producto: ${productoEditado.nombreProducto} no fue editado correctamente`, 'error');
            }
        })
    };
    return(
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Editar Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="p-3 m-3" controlId="productName">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre del producto"{
          ...register("nombreProducto",{
            required: 'EL nombre del producto es obligatorio',
            message:'la cantidad minima de caracteres es de 2 digitos'
          })
        } />
      </Form.Group>

      <Form.Group className="p-3 m-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Ingrese el precio del producto" {
           ...register("precio",{
            required: "El precio es obligatorio",
            min: 1,
            max: 10000,
            message:"la cantidad minima de caracteres es de 1 digitos"
          })
        } />
      </Form.Group>

      <Form.Group  className="p-3 m-3">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingrese la URL de la imagen"{
           ...register("imagen",{
           
          })

        } />
      </Form.Group>

      <Form.Group className="p-3 mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select    {...register("categoria", {
              required: 'La imagen es obligatoria',
            })} >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            
          </Form.Text>
        </Form.Group>

      <Button variant="primary" type="submit" className="m-3">
       Guardar
      </Button>
    </Form>


        </section>
    )

}
export default EditarProducto;