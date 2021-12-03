



async  function login(){
  const username= document.getElementById('username').value
const password= document.getElementById('password').value

var data= {    
  username:username,
password:password

}
console.log(data)
const config = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
}
  console.log(data)

  try{
    const response = await fetch('http://localhost:8080/auth/login', config)
    const json = await response.json()
    console.log(json)
    window.sessionStorage.setItem('access_token', json.token)
    console.log(window.sessionStorage.getItem('access_token'))
    window.location.href = 'catalogo.html';
  }

catch (error) {
           
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

