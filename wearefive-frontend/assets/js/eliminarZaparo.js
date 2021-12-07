
async  function eliminarZapato(){
const url= new URL(window.location.href);
const token= window.sessionStorage.getItem('access_token');
const id=url.searchParams.get("idModelo");

switch(urlParams)
{
  case urlParams=0:
    day = "Sunday";
    break;
  case urlParams=2:
    day = "Monday";
    break;
  case urlParams=6:
    day = "Tuesday";
    break;
  case urlParams=3:
    day = "Wednesday";
    break;
  case urlParams=1:
    day = "Thursday";
    break;
  case urlParams=5:
    day = "Friday";
    break;
  case  urlParams=6:
    day = "Saturday";
}

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