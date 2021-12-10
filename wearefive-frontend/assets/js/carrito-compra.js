fetch("http://"+host()+"/api/carrito/list")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const table= document.getElementById('bodyjs')
    
    for (const product of data.modeloZapatos ){

        const body= document.createElement('tbody')
        body.className="post";
    
        //tdNombre
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    tdNombre.appendChild(Nombre)
    body.appendChild(tdNombre)
//tdCamtidad
    const tdCantidad=document.createElement('td')
    const Cantidad=document.createElement('li')
    Cantidad.innerHTML = product.Cantidad
    tdCantidad.appendChild(Cantidad)
    body.appendChild(tdCantidad)
//tdPrecio
    const tdPrecio=document.createElement('td')
    const Precio=document.createElement('li')
    Precio.innerHTML = product.precioVenta
    tdPrecio.appendChild(Precio)
    body.appendChild(tdPrecio)
//tdButtonQuitar
const tdButtonQuitar=document.createElement('td')
    const formulario = document.createElement('form')
    formulario.action = 'eliminarCarrito.html'
    const inputQuitar=document.createElement('input')
    inputQuitar.type="hidden"
    inputQuitar.name="idProducto"
    inputQuitar.value=product.id
    const ButtonQuitar=document.createElement('li')
    formulario.appendChild(ButtonQuitar)
    tdButtonQuitar.appendChild(formulario)




    body.appendChild(tdButtonQuitar)

    table.appendChild(body)

    
    
    }
    const formularioCompra = document.createElement('form')
    formulario.action = 'Comprar.html'
    const inputCompra=document.createElement('input')
    inputCompra.type="hidden"
    inputCompra.name="idCliente"
    inputCompra.value=product.cliente
    formularioCompra.appendChild(inputCompra)
    const ButtonCompra=document.createElement('li')
    formularioCompra.appendChild(ButtonCompra)

    const compra=getElementById("page-wrapper")
    compra.appendChild(formularioCompra)

    })