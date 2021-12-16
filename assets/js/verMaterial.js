const token= window.sessionStorage.getItem('access_token')
const url= new URL(window.location.href);
const id=url.searchParams.get("idModelo");
const idProceso=url.searchParams.get("idProceso");
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

        

        for(const mat of product.materiales){
            if(product.idProceso == idProceso){
                const table= document.getElementById('bodyjs')
                const nombreProceso = document.getElementById('nombreProcesoH2')
                const costoProceso = document.getElementById('costoTotalH2')
                nombreProceso.innerHTML = product.nombre
                costoProceso.innerHTML = product.costoTotal + '$'
                
     

        const body= document.createElement('tbody')
        body.className="post";

         //tdcosto_total
    
        //tdNombre
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const Nombre=document.createElement('h2')
    Nombre.innerHTML=mat.nombre
    tdNombre.appendChild(Nombre)
    body.appendChild(tdNombre)
//tdProcesos
const tdcosto_total=document.createElement('td')
tdcosto_total.className= "a"
const costo_total=document.createElement('h2')
costo_total.innerHTML=mat.precioUnitario
tdcosto_total.appendChild(costo_total)
body.appendChild(tdcosto_total)

    const tdProcesos=document.createElement('td')
    const proceso=document.createElement('li')
        proceso.innerHTML = mat.unidad //
    tdProcesos.appendChild(proceso)
    body.appendChild(tdProcesos)
    //tdMateriales
    const tdUnidad=document.createElement('td')
    const unidad=document.createElement('li')
        unidad.innerHTML = mat.detalle //
    tdUnidad.appendChild(unidad)
    body.appendChild(tdUnidad)

    const tdPrecio=document.createElement('td')
    const precio=document.createElement('li')
        precio.innerHTML = mat.cantidad //
    tdPrecio.appendChild(precio)
    body.appendChild(tdPrecio)

    const tdCantidad=document.createElement('td')
    const cantidad=document.createElement('li')
        cantidad.innerHTML = mat.costoTotal //
    tdCantidad.appendChild(cantidad)
    body.appendChild(tdCantidad)


    



    table.appendChild(body)
            }
        }
    
    



}
if (!response.ok) throw Error(response.status);

})
.catch(error => console.log(error)); 