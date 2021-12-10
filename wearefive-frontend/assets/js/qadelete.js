
async function eliminarQa(){
const token= window.sessionStorage.getItem('access_token');
const url= new URL(window.location.href);
const id=url.searchParams.get("idModelo");
const u = "http://"+host()+"/api/qa/delete/"+id
console.log(u)
try{
    const rawResponse = await fetch(u, {
      
      method: 'DELETE',
      headers: {
        'Authorization':'Bearer '+token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      }
      
    });
    const content = await rawResponse.json();
    window.location.href = 'qa.html';
    console.log(content);
    

}
 catch(error){
  window.location.href = 'qa.html';
}
}

eliminarQa()