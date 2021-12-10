async  function editarMaterial(){
    const url= new URL(window.location.href);
    const id=url.searchParams.get("idMaterial");
    const nombre= document.getElementById("nombre").value;
  const detalle=  document.getElementById("detalle").value;
  const precioUnitario=  document.getElementById("precioUnitario").value;
  const unidad=  document.getElementById("unidad").value;

  
  
  const token= window.sessionStorage.getItem('access_token');
  
  
  try{
      const rawResponse = await fetch("http://"+host()+"/api/materiales/"+id, {
        method: 'PUT',
        headers: {
          'Authorization':'Bearer '+token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({    
        nombre:nombre,
        detalle: detalle,
        precioUnitario:precioUnitario,
        unidad: unidad
      })
      });
      window.location.href = 'materiales.html';
    } catch(error) {
        window.location.href = 'materiales.html';
    }
    window.location.href = 'materiales.html';
    };
  
  