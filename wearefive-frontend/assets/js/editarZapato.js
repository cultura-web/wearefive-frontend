async  function editarZapato(){
  const url= new URL(window.location.href);
  const id=url.searchParams.get("idModelo");
  const nombre= document.getElementById("nombre").value;
const descripcion=  document.getElementById("descripcion").value;
const color=  document.getElementById("color").value;
const tipo=  document.getElementById("tipo").value;
const precioUnitario=  document.getElementById("precioUnitario").value;
const costoTotal=  document.getElementById("costoTotal").value;
const material=  document.getElementById("material").value;
const detalle=  document.getElementById("detalle").value;
const descuento=  document.getElementById("descuento").value;


const token= window.sessionStorage.getItem('access_token');

console.log(precioUnitario)

try{
    const rawResponse = await fetch("http://"+host()+"/api/products/model/"+id, {
      method: 'PUT',
      headers: {
        'Authorization':'Bearer '+token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({    
      nombre:nombre,
      descripcion:descripcion,
      color:color,
      tipo:tipo,
      precioUnitario:precioUnitario,
      costoTotal: costoTotal,
      material: material,
      detalle: detalle,
      descuento:descuento
    })
    });
    const content = await rawResponse.json();
    window.location.href = 'carrito.html';
  } catch(error) {
    window.location.href = 'carrito.html';
  }
    
  };

