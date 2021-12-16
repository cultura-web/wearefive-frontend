const token= window.sessionStorage.getItem('access_token')
fetch("http://"+host()+"/api/products/recibo/",{
    method: 'GET',
    headers: {
      'Authorization':'Bearer '+token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    }


})

.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))

.then(response => response.json())

.then(data => {

    const div_base= document.getElementById('product')


    for (const product of data.modelosZapatos ){



    //data set permite guardar mas datos en html como si fueran variables, en este caso data-category es lo mismo en javascript que dataset.category
    //product guarda como ven al comienzo del for la iteracion del data.modelosZapatos por lo que dentro estaran los datos de cada zapato guardados en las mismas variables
    //que los payloads o body del post man o documento ingenieril
    content.dataset.category= product.categoria;

    //lo mismo solo que en otros objetos y eso excepto por el llamado input
    const div_img=document.createElement('div')
    div_img.className = "ctn-img";
    const h2=document.createElement('h2')
    h2.innerHTML=product.cliente;
    const span=document.createElement('span')
    span.innerHTML="$"+product.precioVenta;
// eliminar recibo
const contentEliminar=document.createElement('form')
contentEliminar.className="post";
contentEliminar.action="recibo.html"
contentEliminar.method="get"

    const inputEliminar=document.createElement('input')
    inputEliminar.type="hidden"
    inputEliminar.name="idRecibo"
    inputEliminar.value=product.id
contentEliminar.appendChild(inputEliminar)
    
    const buttonEliminar=document.createElement('button')
    buttonEliminar.innerHTML="eliminar"
    contentEliminar.appendChild(buttonEliminar)

    //ver recibo

    const contentVer=document.createElement('form')
    contentVer.className="post";
    contentVer.action="reciboVer.html"
    contentVer.method="get"
    
        const inputVer=document.createElement('input')
        inputVer.type="hidden"
        inputVer.name="idRecibo"
        inputVer.value=product.id
    contentVer.appendChild(input)
        
        const buttonVer=document.createElement('button')
        buttonVer.innerHTML="leer mas"
        contentVer.appendChild(buttonVer)

    div_base.appendChild(div_img)
    div_base.appendChild(h2)
    div_base.appendChild(span)
    div_base.appendChild(contentEliminar)
    div_base.appendChild(contentVer)
    }


})