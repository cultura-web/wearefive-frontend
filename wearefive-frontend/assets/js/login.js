


//se llama la funcion por el button para no capturar antes los value
async  function login(){
//valores que en este caso recibimos del html por su id y pasaremos al body del json
  const username= document.getElementById('username').value
const password= document.getElementById('password').value

//body del json(se usa de referencia el body que se recibe de postman al hacer send)
var data= {    
  username:username,
password:password

}
//un check de que se guardaron los datos correctamente
console.log(data)

//configuracion del fetch
const config = {
  //method que usa el postman
  method: 'POST',
  //header obligatorio que en casos de necesitar token lleva 'Authorization':'Bearer '+ token,
  //token es todo el string del token en una variable para el ejemplo
  //bearer debe ir con un espacio para separarlo del token
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  //conversion del body del json anterior 
  body: JSON.stringify(data)
}

//un try que asumo es para no crashear la pagina
  try{
//se guarda la respuesta del fetch (recordar colocar la configuracion en caso de necesitarla para POST,PUT,DELETE.
// en get no tiende a ser necesaria a no ser que use permisos o lo ustedes vean)
//el url del fetch lo pueden sacar del endpoint que hay en el documento ingenieril o postman si estan en grupo
    const response = await fetch('http://localhost:8080/auth/login', config)
    //conversion del fetch 
    const json = await response.json()
    //checker de como llegan los datos para su uso
    console.log(json)
    //en este caso se guarda la variable token en sesion para dure toda la sesion del usuario
    window.sessionStorage.setItem('access_token', json.token)
    //checker que ahora no sirve ya que redirecciona inmediatamente pero lo que hace es asegurar que esta el token en la sesion
    console.log(window.sessionStorage.getItem('access_token'))
    //redireccion y final de este codigo
    window.location.href = 'catalogo.html';
  }

catch (error) {
           //si lo ves no sirvio 
           console.log("error")
   }
  }
 
// async  function login(){
// //try {
//   console.log(" enter")

// const response = await fetch('http://localhost:8080/auth/login', config)
//     //const json = await response.json()
//     console.log(response)
//     if (response.ok) {
//         //return json
//         console.log(response)
//         return response
//     } else {
//         //
//         console.log(" not ok")
//     }
// //} catch (error) {
//         //
//         console.log("error")
// }
// window.sessionStorage.setItem('access_token', config.body.access_token)
// console.log( config.body.access_token)
//}
// async function login()  {
//     const rawResponse = await fetch('http://localhost:8080/auth/login', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
        
//       },
//       body: JSON.stringify({    
//         username:$username,
//       password:$password
//     })
//     });
    
//     const content = await rawResponse.json();
  
//     console.log(rawResponse.access_token);
//   };

