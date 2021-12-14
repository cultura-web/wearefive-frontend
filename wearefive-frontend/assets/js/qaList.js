
function qa(){
fetch("http://"+host()+"/api/qa")
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
.then(response => response.json())
.then(data => {

    const content= document.getElementById('bodyjs')

    for (const qa of data.qas){
        const body=document.createElement('tbody')

    const pregunta=document.createElement('td')
    pregunta.innerHTML=qa.pregunta;

    const respuesta=document.createElement('td')
    respuesta.innerHTML=qa.respuesta;




    
    body.appendChild(pregunta)
    body.appendChild(respuesta)


    content.appendChild(body)

    }

    //fin
})

}
qa()