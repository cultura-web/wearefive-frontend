async  function agregarMaterial(){
    const nombre= document.getElementById('nombre').value
  const detalle= document.getElementById('detalleProceso').value
  const precioUnitario= document.getElementById('precioUnitario').value
  const unidad= document.getElementById('unidad').value
  const token= window.sessionStorage.getItem('access_token')
  try{
      const rawResponse = await fetch('http://localhost:8080/api/materiales', {
        method: 'POST',
        headers: {
          'Authorization':'Bearer '+token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({    
        nombre:nombre,
        detalle:detalle,
        precioUnitario:precioUnitario,
        unidad:unidad
      })
      });
      const content = await rawResponse.json();
      
        window.location.href = 'catalogoAdmin.html';
    
    }
    catch(error){
        window.location.href = 'catalogoAdmin.html';
    }
}
