async  function eliminarProceso(){
  const url= new URL(window.location.href);
  const token= window.sessionStorage.getItem('access_token');
  const id=url.searchParams.get("idProceso");
  const idModelo=url.searchParams.get("idModelo");
  
  try{
      const rawResponse = await fetch("http://localhost:8080/api/products/model/process/"+id, {
        
        method: 'DELETE',
        headers: {
          'Authorization':'Bearer '+token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        }
        
      });
      const content = await rawResponse.json();
      window.location.href = 'procesos.html';
      if (!rawResponse.ok) throw Error(response.status);
  
  
  }
   catch(error){
      window.location.href = 'procesos.html?idModelo='+idModelo;
  }
  
  }
  
  eliminarProceso()