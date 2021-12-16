

function qaAdmin(){
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
        
        //ButtonQuitar
    const tdButton=document.createElement('td')
    const formularioQuitar = document.createElement('form')
    formularioQuitar.action = 'qadelete.html'
    

    const inputModelo=document.createElement('input')
    inputModelo.type="hidden"
    inputModelo.name="idModelo"
    inputModelo.value=qa.id
    const ButtonQuitar=document.createElement('button')
    ButtonQuitar.innerHTML="QUITAR"
    formularioQuitar.appendChild(ButtonQuitar)
    formularioQuitar.appendChild(inputModelo)
    tdButton.appendChild(formularioQuitar)
    body.appendChild(tdButton)
    
    //ButtonEditar
    const formularioEditar = document.createElement('form')
    formularioEditar.action = 'qaedit.html'
    

    const inputModelo2=document.createElement('input')
    inputModelo2.type="hidden"
    inputModelo2.name="idModelo"
    inputModelo2.value=qa.id
    const ButtonEditar=document.createElement('button')
    ButtonEditar.innerHTML="EDITAR"
    formularioEditar.appendChild(ButtonEditar)
    formularioEditar.appendChild(inputModelo2)
    tdButton.appendChild(formularioEditar)
    body.appendChild(tdButton)

    
    
        content.appendChild(body)
    
        }
    
        //fin
    })
    
    }
qaAdmin()