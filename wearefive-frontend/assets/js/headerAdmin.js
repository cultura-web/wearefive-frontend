const ul = document.getElementById("ulnav")

const lizapato=document.createElement("li")
const azapato=document.createElement("a")
azapato.innerHTML="REGISTRAR ZAPATO"
azapato.href="registrar-zapato.html"
lizapato.appendChild(azapato)
ul.appendChild(lizapato)

const licatalogo=document.createElement("li")
const acatalogo=document.createElement("a")
acatalogo.innerHTML="CATALOGO"
acatalogo.href="catalogoAdmin.html"
licatalogo.appendChild(acatalogo)
ul.appendChild(licatalogo)

const lilistazapato=document.createElement("li")
const alistazapato=document.createElement("a")
alistazapato.innerHTML="CARRITO"
alistazapato.href="carrito.html"
lilistazapato.appendChild(alistazapato)
ul.appendChild(lilistazapato)

const liqa=document.createElement("li")
const aqa=document.createElement("a")
aqa.innerHTML="QA"
aqa.href="qa.html"
liqa.appendChild(aqa)
ul.appendChild(liqa)

const liindex=document.createElement("li")
const aindex=document.createElement("a")
aindex.innerHTML="INICIO"
aindex.href="indexadmin.html"
liindex.appendChild(aindex)
ul.appendChild(liindex)

const liproceso=document.createElement("li")
const aproceso=document.createElement("a")
aproceso.innerHTML="PROCESOS"
aproceso.href="procesos.html"
liproceso.appendChild(aproceso)
ul.appendChild(liproceso)

const limaterial=document.createElement("li")
const amaterial=document.createElement("a")
amaterial.innerHTML="MATERIALES"
amaterial.href="materiales.html"
limaterial.appendChild(amaterial)
ul.appendChild(limaterial)



const lilogin=document.createElement("li")
const alogin=document.createElement("a")
alogin.innerHTML="INICIAR SESION"
alogin.href="login_registrer.html"
lilogin.appendChild(alogin)
ul.appendChild(lilogin)