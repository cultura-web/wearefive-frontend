fetch("http://localhost:8080/api/products/list")
.then(response => response.json())
.then(data =>{
    
    //codigo para imprimir en el html

console.log(data)
})


