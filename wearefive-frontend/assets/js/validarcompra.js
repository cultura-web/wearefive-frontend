async function comprar(){
    const token= window.sessionStorage.getItem('access_token')


    const urlcompra= new URL(window.location.href);
    const idcompra = urlcompra.searchParams.get("idModelo");

    const idejemplar = document.getElementById("IDEJEMPLAR").value

    console.log(idejemplar)
    console.log(idcompra)
    const response=await fetch("http://"+host()+"/api/cart/"+idcompra+"/"+idejemplar ,{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     
    }
    
});
if(response.ok)
alert("compra validada")
else
alert("se produjo un error")
location.reload();
const data = await response.json();

}