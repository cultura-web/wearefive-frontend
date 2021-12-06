async function mostrarQA(){


// const url= new URL(window.location.href);
// const id=url.searchParams.get("idModelo");
// const u = "http://localhost:8080/api/qa"
// console.log(u)

//   const rawResponse = await fetch(u);
//   const content = await rawResponse.json();
//   console.log(content);
//   console.log(content.qas[id-1].pregunta);
//   document.getElementById("pregunta").value=content.qas[id-1].pregunta
//   document.getElementById("respuesta").value=content.qas[id-1].respuesta
}

async function editarQa(){
  const pregunta =document.getElementById("pregunta").value
  const respuesta =document.getElementById("respuesta").value
  const url= new URL(window.location.href);
  const id=url.searchParams.get("idModelo");
  const token= window.sessionStorage.getItem('access_token');
const u = "http://"+host()+"/api/qa/edit/"+id
console.log(u)
try{
    const rawResponse = await fetch(u, {
      
      method: 'PUT',
      headers: {
        'Authorization':'Bearer '+token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({    
      pregunta:pregunta,
      respuesta:respuesta,

    })
    });
    const content = await rawResponse.json();
    window.location.href = 'qa.html';
    console.log(content);
    

}
 catch(error){
  window.location.href = 'qa.html';
}
}

mostrarQA()