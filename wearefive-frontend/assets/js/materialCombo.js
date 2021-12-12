const token= window.sessionStorage.getItem('access_token')
fetch("http://"+host()+"/api/materiales/list",{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    }


})
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const table= document.getElementById('materialCombo')
    
    for (const product of data.materiales ){

        //tdNombre
    const Nombre=document.createElement('option')
    Nombre.innerHTML=product.nombre
    Nombre.dataset.idMaterial=product.idMaterial
    table.appendChild(Nombre)

    
    }
    })
