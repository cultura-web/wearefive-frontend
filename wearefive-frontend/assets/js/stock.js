const token = window.sessionStorage.getItem('access_token')
const url = new URL(window.location.href);
const id = url.searchParams.get("idModelo");

fetch("http://" + host() + "/api/products/model/" + id + "/stock", {

   // Adding method type
   method: "GET",

   // Adding headers to the request
   headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

   }
})

   .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
   .then(response => response.json())
   .then(data => {
      console.log(data)
      let varia = "";
      let vari = 0;



      const idModelo = document.getElementById('idModelo')
      const nombreModelo = document.getElementById('nombreModelo')


      const cantidad = document.getElementById('cantidad')
      idModelo.innerHTML = data.idModelo
      nombreModelo.innerHTML = data.nombreModelo
      const lista = [data.ejemplares];
      console.log(lista)
      console.log(varia)
      let bod = "";

      for (const list of data.ejemplares) {
         const table = document.getElementById('bodyjs')
         const body = document.createElement('tbody')
         body.className = "post";

         const tdNombre = document.createElement('td')
         tdNombre.className = "a"
         const Nombre = document.createElement('h2')
         Nombre.innerHTML = list.talla
         tdNombre.appendChild(Nombre)
         body.appendChild(tdNombre)


         const tdProcesos = document.createElement('td')
         const proceso = document.createElement('li')
         proceso.innerHTML = list.cantidad
         tdProcesos.appendChild(proceso)
         body.appendChild(tdProcesos)
         table.appendChild(body)



      }
   })