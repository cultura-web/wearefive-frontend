const div_base= document.getElementById('product')
const url= new URL(window.location.href);
const nombre=url.searchParams.get("nombre");
fetch("http://localhost:8080/api/products/model/"+nombre)
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {
const zapato=data.modeloZapatos[0];
console.log(zapato.nombre)
console.log(zapato)
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
else
nombrejs.innerHTML="none";

const detallejs= document.getElementById('detallejs')
if(zapato.detalle!==undefined){
detallejs.innerHTML=zapato.detalle;}
else{
detallejs.innerHTML="none";}

const tipojs= document.getElementById('tipojs')
if(zapato.tipo!==undefined){
tipojs.innerHTML=zapato.tipo;}
else{
tipojs.innerHTML="none";}

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

