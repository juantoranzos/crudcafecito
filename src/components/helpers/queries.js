//llamar la variable de entorno 
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;
/*
peticiones GET obtener un listado de elementos o un elemento
peticiones post crear un elemento
peticiones put editar un elemento
peticion delete que borra un elemento

*/ 
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

export const obtenerProductos = async ()=>{
   try{
    const respuesta = await fetch (URL_PRODUCTO);
    const listaProductos = await respuesta.json();
    return listaProductos;
   }catch(error){
      console.log(error)

   }
}
export const eliminarProducto = async (id)=>{
   try{
 const respuesta = await fetch(`${URL_PRODUCTO}/${id}`, {
   method: "DELETE"
 });
 return respuesta;
   }catch(error){
      console.log(error)
   }

}
export const crearProducto = async (producto)=>{
   try{
 const respuesta = await fetch(URL_PRODUCTO, {
   method: "POST",
   headers:{
      "Content-Type": "application/json"
   },
   body: JSON.stringify(producto)
 });
 return respuesta;
   }catch(error){
      console.log(error)
   }

}



export const obtenerProducto = async (id)=>{
   try{
    const respuesta = await fetch (`${URL_PRODUCTO}/${id}`);
    const productoEditar= await respuesta.json();
    return productoEditar;
   }catch(error){
      console.log(error)

   }
}
export const consultaEditarProducto = async (producto, id)=>{
   try{
      console.log(producto)
 const respuesta = await fetch(URL_PRODUCTO+'/'+id, {
   method: "PUT",
   headers:{
      "Content-Type": "application/json"
   },
   body: JSON.stringify(producto)
 });
 return respuesta;
   }catch(error){
      console.log(error)
   }

}