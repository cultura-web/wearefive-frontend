fetch("http://localhost:8080/api/products/list")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    //display example
    // console.log(data)
    // const list= document.getElementById('nombre')
    // for (const product of data.modeloZapatos ){
    // const listItem = document.createElement('li')
    // listItem.textContent = `${product.id} - ${product.nombre} - ${product.imagenUrl} - ${product.precioVenta}` 
    // list.appendChild(listItem)
    // //codigo para imprimir en el html
    // }
    
    const div_base= document.getElementById('product')
    for (const product of data.modeloZapatos ){
    const content=document.createElement('form')
    content.className="post";
    content.action="detalle.html"
    content.method="get"
    content.dataset.category= product.categoria;
    const div_img=document.createElement('div')
    div_img.className = "ctn-img";
    const img=document.createElement('img')
    img.src=product.imagenUrl;
    
    const h2=document.createElement('h2')
    h2.innerHTML=product.nombre;
    const input=document.createElement('input')
    input.type="hidden"
    input.id="nombre"
    input.name="nombre"
    input.value=product.nombre
    const span=document.createElement('span')
    span.innerHTML="$"+product.precioVenta;
    const ul_li=document.createElement('ul')
    const li=document.createElement('li')
    li.innerHTML=product.categoria;
    
    const button=document.createElement('button')
    button.innerHTML="Leer más"
 

    div_img.appendChild(img)
    ul_li.appendChild(li)
        
    content.appendChild(div_img)
    content.appendChild(h2)
    content.appendChild(input)
    content.appendChild(span)
    content.appendChild(ul_li)
    content.appendChild(button)
    div_base.appendChild(content)
    }

})



