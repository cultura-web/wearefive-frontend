fetch("http://"+host()+"/api/products/list")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const table= document.getElementById('bodyjs')
    
    for (const product of data.modelosZapatos ){

        const body= document.createElement('tbody')
        body.className="post";
    
    const tdNombre=document.createElement('td')
    tdNombre.className= "a"
    const tdCantidad=document.createElement('td')
    const tdPrecio=document.createElement('td')
    const tdButton=document.createElement('td')

    const Nombre=document.createElement('h2')
    Nombre.innerHTML=product.nombre
    console.log(product)
    
    const Cantidad=document.createElement('li')
    const Precio=document.createElement('li')
    const Button=document.createElement('li')

    Cantidad.innerHTML = product.imagenUrl
    Precio.innerHTML = product.precioVenta

   

    
    const formulario = document.createElement('form')
    formulario.action = 'eliminarZaparo.html'
    const be = document.createElement('input')
    be.value="Eliminar"
    be.type = "submit"
    const input=document.createElement('input')
    input.type="hidden"
    input.name="idModelo"
    input.value=product.id
    formulario.appendChild(input)
    formulario.appendChild(be)

    const formulario2 = document.createElement('form')
    formulario2.action = 'editarZapato.html'

    const be2 = document.createElement('input')
    be2.value="Editar"
    be2.type = "submit"

    const input2=document.createElement('input')
    input2.type="hidden"
    input2.name="idModelo"
    input2.value=product.id
    console.log(input2.id)

    formulario2.appendChild(input2)
    formulario2.appendChild(be2)
        
    tdNombre.appendChild(Nombre)
    tdCantidad.appendChild(Cantidad)
    tdPrecio.appendChild(Precio)
    tdButton.appendChild(Button)
    tdButton.appendChild(formulario)
    tdButton.appendChild(formulario2)

    body.appendChild(tdNombre)
    body.appendChild(tdCantidad)
    body.appendChild(tdPrecio)
    body.appendChild(tdButton)
    table.appendChild(body)

    
    
    }
    })