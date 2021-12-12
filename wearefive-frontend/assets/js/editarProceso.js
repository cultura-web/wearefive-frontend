async  function editarProceso(){
  const url= new URL(window.location.href);
  const id=url.searchParams.get("idProceso");
  const idModelo=url.searchParams.get("idModelo");
    const nombre= document.getElementById("nombre").value;
  const detalle=  document.getElementById("detalle").value;

  const select= document.getElementsByName("Select")[0]
  const selectid = document.getElementsByName("Select")[0].options[ select.selectedIndex ].dataset.idMaterial;
  const cantidad = document.getElementsByName("Cantidad")[0].value;

  var materiales = [];
  var obj = {
    'idMaterial':selectid,
    'cantidad':cantidad
  
  }
  materiales.push(obj);
  let casillas=document.getElementsByClassName("casilla").length;
  for (let index = 2; index <= casillas; index++) {
    const select= document.getElementsByName("Select"+index )[0]
    const selectid = document.getElementsByName("Select"+index )[0].options[ select.selectedIndex ].dataset.idMaterial;
    const cantidad = document.getElementsByName("Cantidad"+index )[0].value;
    var obj = {
      'idMaterial':selectid,
      'cantidad':cantidad
    
    }
    materiales.push(obj);
  }
  console.log(materiales)
  const token= window.sessionStorage.getItem('access_token');
 const body= JSON.stringify({    
    nombre:"correr",
    detalle:"a gran velocidad",
materiales:
      materiales
    
})
console.log(body)
  try{
      const rawResponse = await fetch("http://localhost:8080/api/products/model/process/"+id, {
        method: 'PUT',
         headers: {
           'Authorization':'Bearer '+token,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          
         },
         body: JSON.stringify({    
           nombre:nombre,
           detalle:detalle,
       materiales:
             materiales
           
       })
       });
       window.location.href = 'procesos.html?idModelo='+idModelo;
     //ERRORES
     if(!nombre) throw new SyntaxError("Nombre es obligatorio para editar un proceso")
     if(!detalle) throw new SyntaxError("Introdusca un detalle para editarr un proceso")
     if(!cantidad) throw new SyntaxError("Introdusca una cantidad para editar un proceso")
     if (!rawResponse.ok) throw Error(response.status);
    
   } catch(error) {
        alert(error)
        window.location.href = 'editarProceso.html';
        console.log(error)
   }
    };