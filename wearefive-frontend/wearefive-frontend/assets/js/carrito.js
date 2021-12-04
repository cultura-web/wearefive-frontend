fetch("http://localhost:8080/api/products/list")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const table= document.getElementById('bodyjs')
    
    for (const product of data.modeloZapatos ){
        const body= document.createElement('tbody')
        body.className= "a"
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const tdCantidad=document.createElement('td')
    const tdPrecio=document.createElement('td')
    const tdDescuento=document.createElement('td')
    const tdTotal=document.createElement('td')
    const tdDetalles=document.createElement('td')
    const tdButton=document.createElement('td')

    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    const input=document.createElement('input')
    input.type="hidden"
    input.id="nombre"
    input.name="nombre"
    input.value=product.nombre
    const Cantidad=document.createElement('li')
    const Precio=document.createElement('li')
    const Descuento=document.createElement('li')
    const Total=document.createElement('li')
    const Detalles=document.createElement('li')
    const Button=document.createElement('li')
    const Br=document.createElement('br')
    tdButton.innerHTML="Leer más"
    tdButton.onclick="detalle.html"
 

        
    tdNombre.appendChild(Nombre)
    tdCantidad.appendChild(Cantidad)
    tdPrecio.appendChild(Precio)
    tdDescuento.appendChild(Descuento)
    tdTotal.appendChild(Total)
    tdDetalles.appendChild(Detalles)
    tdButton.appendChild(Button)

    body.appendChild(tdNombre)
    body.appendChild(tdCantidad)
    body.appendChild(tdPrecio)
    body.appendChild(tdDescuento)
    body.appendChild(tdTotal)
    body.appendChild(tdDetalles)
    body.appendChild(tdButton)
    table.appendChild(body)
    }
    })