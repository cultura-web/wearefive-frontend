async function validar(){
    const token= window.sessionStorage.getItem('access_token')
const urlModelo= new URL(window.location.href);
const idModelo = urlModelo.searchParams.get("idModelo");
    
    const talla = document.getElementById("talla")

    const response=await fetch("http://"+host()+"/api/products/model/"+idModelo+"/stock",{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     
    }
});
    const json = await response.json()
    for (let index = 0; index < json.ejemplares.length; index++) {
        const element = json.ejemplares[index].cantidad;
        if(element>0){
        const option =document.createElement("option")
        option.value=json.ejemplares[index].talla;
        option.innerText=json.ejemplares[index].talla;
        talla.appendChild(option)
        }
    }
   
}
function comprar(){
    const urlModelo= new URL(window.location.href);
const idModelo = urlModelo.searchParams.get("idModelo");
    window.sessionStorage.setItem('talla', document.getElementById("talla").options[ document.getElementById("talla").selectedIndex ].innerText)
    window.sessionStorage.setItem('precio', document.getElementById("precioVentajs").innerText)
    window.sessionStorage.setItem('imagen', document.getElementById("imgjs").src)
    window.sessionStorage.setItem('zapato', document.getElementById("nombrejs").innerText)
    window.location.href = 'comprar.html?idModelo='+idModelo;

}
validar()