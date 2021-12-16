
async  function eliminarZapato(){
const url= new URL(window.location.href);
const token= window.sessionStorage.getItem('access_token');
const id=url.searchParams.get("idModelo");



try{
    const rawResponse = await fetch("http://"+host()+"/api/products/model/"+id, {
      
      method: 'DELETE',
      headers: {
        'Authorization':'Bearer '+token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      }
      
    });
    const content = await rawResponse.json();
    window.location.href = 'carrito.html';
    

}
 catch(error){
  window.location.href = 'carrito.html';
}
}

eliminarZapato()