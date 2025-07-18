const uniqueImageIds = [1, 10, 40, 480, 932, 77, 936, 467, 432, 36];  
const usedImageIds = new Set();

function getUniqueRandomImageId() {
  const availableIds = uniqueImageIds.filter(id => !usedImageIds.has(id));
  const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
  usedImageIds.add(randomId);
  return randomId;
}

//-----------------------------------//

//En JS tenemos las funciones de tipo flecha
//Utilizaresmos fetch que es un metodo para consumir una API



const consumirApi = () => {
    fetch ("https://jsonplaceholder.typicode.com/users") //fetch es una promesa. Es una funcion
        
        .then ((response) => response.json ()) //convertimos la respuesta a JSON
        //Los datos los vamos a mandar a la consola 
        .then ((data) => { //puede ser otro nombre, no necesariamente data
            //La data de la api la vamos a llevar al HTML
            //1.- Definir las constantes que se van a usar y el HTML que será afectado
            const contenedor = document.getElementById("contenedor");

            /*Aquí vamos a facilitarnos la vida con forEach*/
            data.forEach(
                (persona) => {
                  const imageId = getUniqueRandomImageId(); //Obtener ID unico
                contenedor.innerHTML += `
                <div class="col-md-3 mb-3">
                  <div class="card h-100">
                    <img src="https://picsum.photos/id/${imageId}/300/200" class="card-img-top" alt="${persona.name}">
                    <div class="card-body">
                      <h5 class="card-title">${persona.name}</h5>

                      <div class="collapse" id="info-${persona.id}">
                        <div class="card-text">

                          <p class="card-text">
                        <strong>UserName:</strong> ${persona.username}<br>                      
                        <strong>Email:</strong> ${persona.email}<br>
                        <strong>Teléfono:</strong> ${persona.phone}<br>
                        <strong>WebSite:</strong> ${persona.website}<br>
                        <strong>Empresa:</strong> ${persona.company.name}</p>                     
                          </div>
                      </div>

                    <button class="btn btn-primary mt-1" type="button" data-bs-toggle="collapse" 
                          data-bs-target="#info-${persona.id}" aria-expanded="false" 
                          aria-controls="info-${persona.id}"> Mostrar/Ocultar información</button>
                  </div>
                </div>
              </div>
              `;
            });
        })
        //Descubrir que hacer en caso de que no me corresponda
        .catch((error) => console.log(error));

    //DOM = Document Object Model = Documento Modelo de Objeto
    //Semana 2: A partir de esta sesion vamos a identificar los elementos del HTML con un "id"
    
    const titulo = document.getElementById("tituloEncabezado");

    //Imprimo la variable titulo, pero con el atributo textContent
    console.log(titulo.textContent); //textContent es una propiedad que me permite acceder al contenido de un elemento

};

consumirApi();
