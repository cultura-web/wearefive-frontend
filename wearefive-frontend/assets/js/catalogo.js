
// const token= window.sessionStorage.getItem('access_token');

// const varparseJwt = (token) => {
//     try {
//       return JSON.parse(atob(token.split('.')[1]));
//     } catch (e) {
//       return null;
//     }
//   };

//   const varatob=JSON.parse(atob(token.split('.')[1]));
// function parseJwt (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
// };

//este fecth responde con los datos para crear el catalogo asi que no es necesario que este en una funcion ya que asi se activa nada mas lo lee html en los scripts
//el url del fetch lo pueden sacar del endpoint que hay en el documento ingenieril o postman si estan en grupo
fetch("http://"+host()+"/api/products/list")
//checker de que funciono
.then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
//conversion de la variable que almacena el fetch(esta se inicializa por el then al parecer como si fuera una y usaras "cd archivo dentro de la ruta")
.then(response => response.json())
//data es el response.json en este caso
.then(data => {

    //display example
    // console.log(data)
    // const list= document.getElementById('nombre')
    // for (const product of data.modelosZapatos ){
    // const listItem = document.createElement('li')
    // listItem.textContent = `${product.id} - ${product.nombre} - ${product.imagenUrl} - ${product.precioVenta}` 
    // list.appendChild(listItem)
    // //codigo para imprimir en el html
    // }
    

    //objeto que se saca del html por su id para servir de base para todos el resto de objetos presentados aparescan luego
    //esto sera por medio de appendchild si ven al final del codigo haciendo div_base.appendChild(content) que content contiene 
    //todo ya de por si ,pero ya que tambien es creado este aun esta oculto tambien
    const div_base= document.getElementById('product')


    //secuencia iterativa que lee hasta que pase por todos los espacios del array que en este caso es  data.modelosZapatos
    //data.modelosZapatos esta asi ya que si por postman ven el body este tiene la capa modelosZapatos enserando el array asi que hay que entrar a esta
    //usamos una const, var, let(como vean) para guardar el valor dado en ciclo for tirado por data.modelosZapatos[n(iteracion)]
    for (const product of data.modelosZapatos ){
        //se crea un const, var, let(como vean) para luego usar el objeto creado(en el create element va entre '' el nombre de objeto html que crearan)
        const content=document.createElement('form')
        //datos que configuramos del objeto html creado por medio del const, var, let(como vean) que lo guarda
        //estos datos luego se usan en este caso para pasar a detalle.html por eso el metodo "get" y action que redirigira luego por un boton a "detalle.html"
        content.className="post";
        content.action="detalle.html"
        content.method="get"
    
        //data set permite guardar mas datos en html como si fueran variables, en este caso data-category es lo mismo en javascript que dataset.category
        //product guarda como ven al comienzo del for la iteracion del data.modelosZapatos por lo que dentro estaran los datos de cada zapato guardados en las mismas variables
        //que los payloads o body del post man o documento ingenieril
        content.dataset.category= product.categoria;
    
        //lo mismo solo que en otros objetos y eso excepto por el llamado input
        const div_img=document.createElement('div')
        div_img.className = "ctn-img";
        const img=document.createElement('img')
        img.src=product.imagenUrl;
        div_img.appendChild(img)
        content.appendChild(div_img)
    
        const h2=document.createElement('h2')
        h2.innerHTML=product.nombre;
        content.appendChild(h2)
    
    //input contiene el input oculto que redirige por medio de luego por el button su valor al url proximo que sera el de detalle.html para generar los valores de la tabla
        const input=document.createElement('input')
        input.type="hidden"
        input.name="idModelo"
        input.value=product.id
    
        content.appendChild(input)
    
    
        const span=document.createElement('span')
        span.innerHTML="$"+product.precioVenta;
        const ul_li=document.createElement('ul')
        //categoria
        // const li=document.createElement('li')
        // li.innerHTML=product.categoria;
        // ul_li.appendChild(li)
        content.appendChild(span)
    
        content.appendChild(ul_li)
        //boton que escuchara al form del comienzo en la variable content
        const button=document.createElement('button')
        button.innerHTML="Leer más"
    
        content.appendChild(button)
    
    
    
        //la base que aparece en html contiene todo para que aparesca en el html
        div_base.appendChild(content)
        }
    
        //fin
    })
