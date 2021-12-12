async  function agregarMaterial(){
  const nombre= document.getElementById('nombre').value
const detalle= document.getElementById('detalleProceso').value
const precioUnitario= document.getElementById('precioUnitario').value
const unidad= document.getElementById('unidad').value
const token= window.sessionStorage.getItem('access_token')
try{
    const rawResponse = await fetch("http://"+host()+"/api/materiales", {
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
    
    
      window.location.href = 'materiales.html';
  
      if(!nombre) throw new SyntaxError("Nombre es obligatorio para agregar un material")
      if(!detalle) throw new SyntaxError("Detalle es obligatorio para agregar un material")
      if(!precioUnitario) throw new SyntaxError("Precio unitario es obligatorio para agregar un material")
      if(!unidad) throw new SyntaxError("Unidad unitario es obligatorio para agregar un material")
  }
  catch(error){
    alert(error);
    window.location.href = 'agregarMaterial.html';
    console.log(error);
  }
}
