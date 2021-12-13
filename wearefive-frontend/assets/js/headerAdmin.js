const ul = document.getElementById("ulnav")

/** 
const liopciones=document.createElement("li")
const aopciones=document.createElement("a")
aopciones.href="#"
aopciones.innerText="OPCIONES"
const ulopciones=document.createElement("ul")
ulopciones.style="background-color: rgba(32, 54, 80, 1);"
liopciones.appendChild(aopciones)
liopciones.appendChild(ulopciones)
ul.appendChild(liopciones)

 const lizapato=document.createElement("li")
const azapato=document.createElement("a")
lizapato.style="color:white;"
azapato.innerText="GESTIONAR ZAPATO"
azapato.href="carrito.html"
lizapato.appendChild(azapato)
ulopciones.appendChild(lizapato)

const licatalogo=document.createElement("li")
const acatalogo=document.createElement("a")
licatalogo.style="color:white;"
acatalogo.innerText="CATALOGO"
acatalogo.href="catalogoAdmin.html"
licatalogo.appendChild(acatalogo)
ulopciones.appendChild(licatalogo)


const liqa=document.createElement("li")
const aqa=document.createElement("a")
liqa.style="color:white;"
aqa.innerText="GESTIONAR QA"
aqa.href="qa.html"
liqa.appendChild(aqa)
ulopciones.appendChild(liqa)

const liindex=document.createElement("li")
const aindex=document.createElement("a")
liindex.style="color:white;"
aindex.innerText="INICIO"
aindex.href="indexadmin.html"
liindex.appendChild(aindex)
ul.appendChild(liindex)

const liproceso=document.createElement("li")
const aproceso=document.createElement("a")
liproceso.style="color:white;"
aproceso.innerHTML="GESTIONAR PROCESOS"
aproceso.href="procesos.html"
liproceso.appendChild(aproceso)
ulopciones.appendChild(liproceso)

const limaterial=document.createElement("li")
const amaterial=document.createElement("a")
limaterial.style="color:white;"
amaterial.innerText="MATERIALES"
amaterial.href="materiales.html"
limaterial.appendChild(amaterial)
ul.appendChild(limaterial)


const lilogin=document.createElement("li")
const alogin=document.createElement("button")
lilogin.style="color:white;"
alogin.innerText="CERRAR SESION"
alogin.onclick=function cerrar(){
    window.sessionStorage.setItem('access_token',"")
    window.location.href="index.html"
}
alogin.className="button"
lilogin.appendChild(alogin)
ul.appendChild(lilogin) 

const libuscar=document.createElement("li")
libuscar.style="color:white;"
const formularioB=document.createElement("form")
formularioB.action="buscarAdmin.html"
const buscarZapato=document.createElement("input")
buscarZapato.type="input"
buscarZapato.name="nombreUrl"
const buttonBuscar=document.createElement("button")
buttonBuscar.innerHTML="BUSCAR"

formularioB.appendChild(buscarZapato)
formularioB.appendChild(buttonBuscar)
libuscar.appendChild(formularioB)
ul.appendChild(libuscar)

*/