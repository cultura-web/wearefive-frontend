async  function eliminarProceso(){
    const url= new URL(window.location.href);
    const token= window.sessionStorage.getItem('access_token');
    const id=url.searchParams.get("idProceso");
    
    
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
        
    
    }
     catch(error){
        window.location.href = 'procesos.html';
    }
    window.location.href = 'procesos.html';
    }
    
    eliminarProceso()