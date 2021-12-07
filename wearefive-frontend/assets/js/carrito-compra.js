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
    const formulario = document.createElement('form')
    formulario.action = 'eliminar.html'
    const tdButtonQuitar=document.createElement('td')
    const ButtonQuitar=document.createElement('li')

    tdButtonQuitar.appendChild(ButtonQuitar)
    body.appendChild(tdButtonQuitar)






   

    
    

    const be = document.createElement('input')
    be.innerHTML="Eliminar"
    be.type = "submit"
    const input=document.createElement('input')
    input.type="hidden"
    input.name="idCarrito"
    input.value=product.id
    formulario.appendChild(input)
    formulario.appendChild(be)

    const formulario2 = document.createElement('form')
    formulario2.action = 'editarZapato.html'

    const be2 = document.createElement('input')
    be2.innerHTML="Editar"
    be2.type = "submit"

    const input2=document.createElement('input')
    input2.type="hidden"
    input2.name="idCarrito"
    input2.value=product.id
    console.log(input2.id)

    formulario2.appendChild(input2)
    formulario2.appendChild(be2)
        




    tdButton.appendChild(formulario)
    tdButton.appendChild(formulario2)


    table.appendChild(body)

    
    
    }
    })