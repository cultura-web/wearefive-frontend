async function registrar() {
    const $username = document.getElementById('usernameR').value
    const $contrasena = document.getElementById('contrasena').value
    const $apellidos = document.getElementById('apellidos').value
    const $nombres = document.getElementById('nombres').value
    const $correo = document.getElementById('correo').value
    const $direccion = document.getElementById('direccion').value
    const $celular = document.getElementById('celular').value

    
    try {
        const rawResponse = await fetch("http://"+host()+"/auth/register", {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: $username,
                contrasena: $contrasena,
                apellidos: $apellidos,
                nombres: $nombres,
                correo: $correo,
                direccion: $direccion,
                celular: $celular
            })
        });
        console.log(await rawResponse.json())

        window.location.href = 'index.html';
    //ERRORES
    
    if (!rawResponse.ok) throw Error(response.statusText);
   
  } catch(error) {
       alert(error)
       window.location.href = 'login_registrer.html';
       console.log(error)
  }

};