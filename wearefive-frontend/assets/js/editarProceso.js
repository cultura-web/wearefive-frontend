async  function editarProceso(){
    const url= new URL(window.location.href);
    const id=url.searchParams.get("idProceso");
      const nombre= document.getElementById("nombre").value;
    const detalle=  document.getElementById("detalle").value;
    const cantidad=  document.getElementById("cantidad").value;
    
    
    
    const token= window.sessionStorage.getItem('access_token');
    
    
    try{
        const rawResponse = await fetch("http://localhost:8080/api/products/model/process"+id, {
          method: 'PUT',
          headers: {
            'Authorization':'Bearer '+token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            
          },
          body: JSON.stringify({    
            nombre:"correr",
            detalle:"a gran velocidad",
            materiales:[
                {
                    idMaterial:1,
                    cantidad:5
                },
                {
                  idMaterial:2,
                  cantidad:10
                }
            ]
        })
        });
        window.location.href = 'procesos.html';
      } catch(error) {
          window.location.href = 'procesos.html';
      }
      window.location.href = 'procesos.html';
      };