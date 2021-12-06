

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
  
    console.log(content);
  };





document.addEventListener("DOMContentLoaded", function (e) {
    var miForm = document.getElementById('registrarZapato');
    miForm.onsubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        var jsonData = {};
        for (var [k, v] of formData) {

            jsonData[k] = v;
        }
        if(jsonData.json().status===403)
        alert("error usted no posee permisos para esta ventana por favor salga o contacte a un tecnico de ser necesario");
        console.log(jsonData);
    }
}  )