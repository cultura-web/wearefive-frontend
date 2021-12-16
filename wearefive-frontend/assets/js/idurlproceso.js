const urlProceso= new URL(window.location.href);


const idModelo=urlProceso.searchParams.get("idModelo");
function idagregarProceso(){

const urlinputP=document.getElementById("agregarinput")

urlinputP.value=idModelo
window.location.href = 'agregarProceso.html';

}
function idREGRESAR(){

    const urlinputP=document.getElementById("agregarinput")
    
    urlinputP.value=idModelo
    window.location.href = 'procesos.html';
    
    }