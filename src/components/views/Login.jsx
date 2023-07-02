import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { login } from '../helpers/queries';
import { useForm } from 'react-hook-form';

function Login() {
    const{register, handleSubmit, formState:{ errors }, reset} = useForm();
   

    const onSubmit = (usuario) =>{
        
        login();


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
                required: 'El email es obligatorio'
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
                required: 'La contraseña es obligatoria'
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