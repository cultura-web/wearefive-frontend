
async  function eliminarMaterial(){
  const url= new URL(window.location.href);
  const token= window.sessionStorage.getItem('access_token');
  const id=url.searchParams.get("idMaterial");
  
  
  try{
      const rawResponse = await fetch("http://"+host()+"/api/materiales/"+id, {
        
        method: 'DELETE',
        headers: {
          'Authorization':'Bearer '+token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        }
        
      });
      const content = await rawResponse.json();
      window.location.href = 'materiales.html';
      if (!rawResponse.ok) throw Error(response.status);
  
  }
   catch(error){
    alert(error)
      window.location.href = 'materiales.html';
  }
  }
  
  eliminarMaterial()