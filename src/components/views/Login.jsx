import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { login } from '../helpers/queries';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login({setUsuarioLogueado}) {
    const{register, handleSubmit, formState:{ errors }, reset} = useForm();
    const navegacion = useNavigate();
   

    const onSubmit = (usuario) =>{
        
        login(usuario).then((respuesta)=>{
          if(respuesta){
            //debo loguear al usuario
            sessionStorage.setItem('usuario', JSON.stringify(respuesta));
            setUsuarioLogueado(respuesta);
            Swal.fire('Bienvenido', 'Email y constraseñas correctas', 'success')
            navegacion('/administrador')
          }else{
            //indicar datos erroneos al usuario
            Swal.fire('Error', 'Email o contraseñas incorrectas', 'error')
          }
        })


    }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='pt-5 p-5'>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder='Ingrese un correo' {
             ...register('email', {
                required: 'El email es obligatorio',
                pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'El email debe contener @ y terminar . com/es/com.ar u otra terminacion'
                }
             })
          }/>
          <Form.Text className='text-danger'>
           {errors.email?.message}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" {
            ...register('password', {
                required: 'La contraseña es obligatoria',
                pattern:{
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: 'El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                }
            })
          } />
         <Form.Text className='text-danger'>
           {errors.password?.message}
          </Form.Text>
        </Col>
      </Form.Group>
      <Button className='mt-2' variant="primary" type="submit">
              Ingresar
            </Button>
    </Form>
  );
}

export default Login;