
async  function qaPost(){
    
  try{
  
  const token= window.sessionStorage.getItem('access_token');
  
  const pregunta =document.getElementById("pregunta").value
  const respuesta =document.getElementById("respuesta").value

  
      const rawResponse = await fetch('http://'+host()+'/api/qa/new', {
        method: 'POST',
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
    };
  
  
  
  
  
 