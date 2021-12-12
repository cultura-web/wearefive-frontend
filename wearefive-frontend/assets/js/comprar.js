async function datos(){
    const token= window.sessionStorage.getItem('access_token')
const urlModelo= new URL(window.location.href);
const idModelo = urlModelo.searchParams.get("idModelo");
    console.log(parseJwt(token).sub) 

    const talla = document.getElementById("talla")
    talla.innerText=window.sessionStorage.getItem('talla')
    const precio = document.getElementById("precio")
    precio.innerText="$"+window.sessionStorage.getItem('precio')
    precio.value=window.sessionStorage.getItem('precio')
    const zapato = document.getElementById("zapato")
    zapato.innerText=window.sessionStorage.getItem('zapato')
    const imagen = document.getElementById("imagen")
    imagen.src=window.sessionStorage.getItem('imagen')
    const nombre = document.getElementById("nombre")
    nombre.innerText=parseJwt(token).sub
    const response=await fetch("http://"+host()+"/api/products/model/"+idModelo+"/stock",{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     
    }
});
    const json = await response.json()
   
   
}
function comprar(){
    
}
datos()