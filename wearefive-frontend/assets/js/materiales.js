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

    const table= document.getElementById('bodyjs')
    
    for (const product of data.materiales ){

        const body= document.createElement('tbody')
        body.className="post";

        //tdNombre
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    tdNombre.appendChild(Nombre)
    body.appendChild(tdNombre)

         //tdprecioUnitario
         const tdprecioUnitario=document.createElement('td')
         tdprecioUnitario.className= "a"
         const precioUnitario=document.createElement('h2')
         precioUnitario.innerHTML=product.precioUnitario
         tdprecioUnitario.appendChild(precioUnitario)
         body.appendChild(tdprecioUnitario)

    //tdButton
    const tdButton=document.createElement('td')

//ButtonQuitar
const formularioQuitar = document.createElement('form')
formularioQuitar.action = 'eliminarMaterial.html'

const inputQuitar=document.createElement('input')
inputQuitar.type="hidden"
inputQuitar.name="idMaterial"
inputQuitar.value=product.idMaterial
const ButtonQuitar=document.createElement('button')
ButtonQuitar.innerHTML="QUITAR"
formularioQuitar.appendChild(ButtonQuitar)
formularioQuitar.appendChild(inputQuitar)
tdButton.appendChild(formularioQuitar)
body.appendChild(tdButton)

//ButtonEditar
const formularioEditar = document.createElement('form')
formularioEditar.action = 'editarMaterial.html'

const inputEditar=document.createElement('input')
inputEditar.type="hidden"
inputEditar.name="idMaterial"
inputEditar.value=product.idMaterial
const ButtonEditar=document.createElement('button')
ButtonEditar.innerHTML="EDITAR"
formularioEditar.appendChild(ButtonEditar)
formularioEditar.appendChild(inputEditar)
tdButton.appendChild(formularioEditar)
body.appendChild(tdButton)

    table.appendChild(body)
    
    }
    })
