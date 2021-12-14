

async  function productPost(){
  const $nombre= document.getElementById('nombre').value
const $descripcion= document.getElementById('descripcion').value
const $color= document.getElementById('color').value
const $tipo= document.getElementById('tipo').value
const $precioUnitario= document.getElementById('precioUnitario').value
const $costoTotal= document.getElementById('costoTotal').value
const $material= document.getElementById('material').value
const $detalle= document.getElementById('detalle').value
const $descuento= document.getElementById('descuento').value
const token= window.sessionStorage.getItem('access_token');
try{

    const rawResponse = await fetch('http://'+host()+'/api/products/model', {
      method: 'POST',
      headers: {
        'Authorization':'Bearer '+token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({    
        nombre:$nombre,
      descripcion:$descripcion,
      color:$color,
      tipo:$tipo,
      precioUnitario:$precioUnitario,
      costoTotal: $costoTotal,
      material: $material,
      detalle: $detalle,
      descuento:$descuento
    })
    });
    const content = await rawResponse.json();
    window.location.href = 'catalogoAdmin.html';
    
    //if(!rawResponse.ok ) throw Error(response.statusText);
    if($precioUnitario > $costoTotal) throw new SyntaxError("El precio unitario no puede ser mayor al precio total")
    if(!$nombre) throw new SyntaxError("Nombre es obligatorio para agregar un modelo de zapato")
    if(!$descripcion) throw new SyntaxError("Descripcion es obligatorio para agregar un modelo de zapato")
    if(!$color) throw new SyntaxError("Color es obligatorio para agregar un modelo de zapato")
    if(!$precioUnitario) throw new SyntaxError("Precio unitario es obligatorio para agregar un modelo de zapato")
    if(!$costoTotal) throw new SyntaxError("Costo total es obligatorio para agregar un modelo de zapato")
    if(!$material) throw new SyntaxError("Material es obligatorio para agregar un modelo de zapato")
    if(!$detalle) throw new SyntaxError("Detalle es obligatorio para agregar un modelo de zapato")
    if(!$descuento) throw new SyntaxError("Descuento es obligatorio para agregar un modelo de zapato")
}
catch(error){
  //alert(error)
  window.location.href = 'registrar-zapato.html';
  console.log(error)
}
window.location.href = 'registrar-zapato.html';
}


