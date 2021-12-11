const token= window.sessionStorage.getItem('access_token')
const url= new URL(window.location.href);
const id=url.searchParams.get("idModelo");
fetch("http://"+host()+"/api/products/model/"+id+"/costs", {
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    }})

    

.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {
    

    for(const product of data.procesos){

        const nombreProceso = document.getElementById('nombreProcesoH2')
        const costoProceso = document.getElementById('costoTotalH2')
        nombreProceso.innerHTML = data.nombreModelo
        costoProceso.innerHTML = data.costoTotal + '$'
    const table= document.getElementById('bodyjs')
   
    

        const body= document.createElement('tbody')
        body.className="post";

         //tdcosto_total
    const tdcosto_total=document.createElement('td')
    tdcosto_total.className= "a"
    const costo_total=document.createElement('h2')
    costo_total.innerHTML=product.costoTotal + '$'
    tdcosto_total.appendChild(costo_total)
    body.appendChild(tdcosto_total)
        //tdNombre
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    tdNombre.appendChild(Nombre)
    body.appendChild(tdNombre)
//tdProcesos
    const tdProcesos=document.createElement('td')
    const proceso=document.createElement('li')
        proceso.innerHTML = product.detalle//
    tdProcesos.appendChild(proceso)
    body.appendChild(tdProcesos)
    //tdMateriales
    const formularioMaterial = document.createElement('form')
formularioMaterial.action = 'verMaterial.html'
const tdButton2=document.createElement('td')
const inputMaterial=document.createElement('input')
inputMaterial.type="hidden"
inputMaterial.name="idModelo"
inputMaterial.value=1
const inputProceso=document.createElement('input')
inputProceso.type="hidden"
inputProceso.name="idProceso"
inputProceso.value=product.idProceso
const ButtonMaterial=document.createElement('button')
ButtonMaterial.innerHTML="VER MATERIALES"
formularioMaterial.appendChild(ButtonMaterial)
formularioMaterial.appendChild(inputMaterial)
formularioMaterial.appendChild(inputProceso)
tdButton2.appendChild(formularioMaterial)
body.appendChild(tdButton2)

    //ButtonQuitar
    const tdButton=document.createElement('td')
const formularioQuitar = document.createElement('form')
formularioQuitar.action = 'eliminarProceso.html'

const inputQuitar=document.createElement('input')
inputQuitar.type="hidden"
inputQuitar.name="idProceso"
inputQuitar.value=product.idProceso
const inputModelo=document.createElement('input')
inputModelo.type="hidden"
inputModelo.name="idModelo"
inputModelo.value=id
const ButtonQuitar=document.createElement('button')
ButtonQuitar.innerHTML="QUITAR"
formularioQuitar.appendChild(ButtonQuitar)
formularioQuitar.appendChild(inputQuitar)
formularioQuitar.appendChild(inputModelo)
tdButton.appendChild(formularioQuitar)
body.appendChild(tdButton)

//ButtonEditar
const formularioEditar = document.createElement('form')
formularioEditar.action = 'editarProceso.html'

const inputEditar=document.createElement('input')
inputEditar.type="hidden"
inputEditar.name="idProceso"
inputEditar.value=product.idProceso
const inputModelo2=document.createElement('input')
inputModelo2.type="hidden"
inputModelo2.name="idModelo"
inputModelo2.value=id
const ButtonEditar=document.createElement('button')
ButtonEditar.innerHTML="EDITAR"
formularioEditar.appendChild(ButtonEditar)
formularioEditar.appendChild(inputEditar)
formularioEditar.appendChild(inputModelo2)
tdButton.appendChild(formularioEditar)
body.appendChild(tdButton)



    table.appendChild(body)

}
    })
