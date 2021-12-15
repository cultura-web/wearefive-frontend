


async function editar() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("idModelo");
    const nombre = document.getElementById("nombreModelo").innerText;

    const token = window.sessionStorage.getItem('access_token');

    const talla= document.getElementsByName("Talla")[0].value;
    const cantidad = document.getElementsByName("Cantidad")[0].value;
  
    var materiales =[];
    var obj = {
        "cantidad":cantidad,
        "talla":talla
    }
    materiales.push(obj);
    let casillas=document.getElementsByClassName("casilla").length;
    for (let index = 2; index <= casillas; index++) {
      const talla= document.getElementsByName("Talla"+index )[0].value;
      console.log(talla)
      const cantidad = document.getElementsByName("Cantidad"+index )[0].value;
      console.log(cantidad)
      var obj = {
        "cantidad":cantidad,
        "talla":talla
      }
      materiales.push(obj);
    }



    try {
        const rawResponse = await fetch("http://"+host()+"/api/products/model/"+id+"/stock", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ 
                idModelo:id,
                nombreModelo:nombre,
                ejemplares:materiales
            })
        
        });
        const data = await rawResponse.json();

        // enter you logic when the fetch is successful

        //window.location.href = 'Stock.html';

    } catch (error) {
        alert(error)
       // window.location.href = 'editarMaterial.html';
        console.log(error)
    }
};

