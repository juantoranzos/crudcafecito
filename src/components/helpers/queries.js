//llamar la variable de entorno 
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
export const login = async (usuario) =>{
 console.log(usuario);
 try{

    const respuesta = await fetch (URL_USUARIO);
    const listaUsuarios = await respuesta.json();
    console.log(listaUsuarios);

   const usuarioBuscado = listaUsuarios.find ((itemUsuario)=> itemUsuario.email === usuario.email);
   if(usuarioBuscado){
     console.log('email encontrado');
     //verificar el password
     if (usuarioBuscado.password === usuario.password){
        console.log('Encontramos al usuario')
        return usuarioBuscado;
     }else{
        console.log('el password es incorrecto')
     }
   }else{
    console.log('email incorrecto')
    return null
   }

 }catch (error){
    console.log(error)
    return null;
 }
}