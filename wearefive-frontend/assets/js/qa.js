

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

    const tdForm=document.createElement('td')
    
    const inputdelete=document.createElement('input')
    inputdelete.name="idModelo"
    inputdelete.type="hidden"
    inputdelete.value=qa.id
    const formdelete=document.createElement('form')
        formdelete.action="qadelete.html"

        const inputedit=document.createElement('input')
        inputedit.name="idModelo"
        inputedit.type="hidden"
        inputedit.value=qa.id
        const formedit=document.createElement('form')
            formedit.action="qaedit.html"
    
    

    const buttonEdit=document.createElement('button')
    buttonEdit.innerHTML="editar"
 
    const buttonDelete=document.createElement('button')
    buttonDelete.innerHTML="eliminar"

    
    body.appendChild(pregunta)
    body.appendChild(respuesta)

    formdelete.appendChild(inputdelete)
        formdelete.appendChild(buttonDelete)
        tdForm.appendChild(formdelete)
        formedit.appendChild(inputedit)
        formedit.appendChild(buttonEdit)
        tdForm.appendChild(formedit)
    body.appendChild(tdForm)

    content.appendChild(body)

    }

    //fin
})


