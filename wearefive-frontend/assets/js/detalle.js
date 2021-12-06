const div_base= document.getElementById('product')
const url= new URL(window.location.href);
const id=url.searchParams.get("idModelo");
fetch("http://"+host()+"/api/products/model?idModelo="+id)
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {
const zapato=data;
console.log(zapato)
console.log(zapato.nombre)

console.log(zapato.detalle)

const imgjs= document.getElementById('imgjs')
if(zapato.imagenUrl!=="undefined")
imgjs.src=zapato.imagenUrl;
else
imgjs.src="none";

const precioVentajs= document.getElementById('precioVentajs')
if(zapato.precioVenta!==undefined){
precioVentajs.innerHTML=zapato.precioVenta;}
else{
precioVentajs.innerHTML="none";}

const nombrejs= document.getElementById('nombrejs')
if(zapato.nombre!==undefined)
nombrejs.innerHTML=zapato.nombre;
else{
nombrejs.innerHTML="none";}

const materialjs= document.getElementById('materialjs')
if(zapato.material!==undefined){
    materialjs.innerText=zapato.material;}
else{
    materialjs.innerText="none";}

const descripcionjs= document.getElementById('descripcionjs')
if(zapato.descripcion!==undefined){
    descripcionjs.innerText=zapato.descripcion;}
else{
    descripcionjs.innerText="none";}

const tipojs= document.getElementById('tipojs')
if(zapato.tipo!==undefined){
tipojs.innerText=zapato.tipo;}
else{
tipojs.innerText="none";}

const colorjs= document.getElementById('colorjs')
if(zapato.color!==undefined)
colorjs.innerHTML=zapato.color;
else
colorjs.innerHTML="none";

const descuentojs= document.getElementById('descuentojs')
if(zapato.descuento!==undefined){
descuentojs.innerHTML=zapato.descuento;}
else{
descuentojs.innerHTML="none";}
})

