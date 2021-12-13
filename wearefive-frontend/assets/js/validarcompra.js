async function comprar(){
    const token= window.sessionStorage.getItem('access_token')




    const talla = document.getElementById("TALLA").value

    const zapato = document.getElementById("IDZAPATO").value

    const response=await fetch("http://"+host()+"/api/cart/"+zapato+"/"+talla+"/buy",{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     
    }
});
}