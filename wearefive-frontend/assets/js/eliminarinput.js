const div_base= document.getElementById('product')
const url= new URL(window.location.href);
const id=url.searchParams.get("idModelo");
fetch("http://localhost:8080/api/products/model?idModelo="+id)
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    
    
    const input=document.createElement('input')
    input.type="hidden"
    input.id="idModelo"
    input.name="idModelo"
    input.value=product.id


    content.appendChild(input)
    div_base.appendChild(content)

    window.location.href = 'carrito.html';
})