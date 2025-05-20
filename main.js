//En JS tenemos las funciones de tipo flecha
//Utilizaresmos fetch que es un metodo para consumir una API

const consumirApi = () => {
    fetch ("https://jsonplaceholder.typicode.com/users") //fetch es una promesa. Es una funcion
        //convertimos la respuesta a JSON
        .then ((response) => response.json ())
        //Los datos los vamos a mandar a la consola 
        .then ((data) => {    //puede ser otro nombre, no necesariamente data
            //La data de la api la vamos a llevar al HTML
            //paso 1. Definimos las constantes que vamos a usar y el HTML que vamos a afectar
            const nombre = document.getElementById("nombre");
            const nombreUsuario = document.getElementById("nombreUsuario");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const website = document.getElementById("website");
                const street = document.getElementById("street");
                const suite = document.getElementById("suite");
                const city = document.getElementById("city");
                const zipcode = document.getElementById("zipcode");

            //data es un array/arreglo, por eso el [0]
            nombre.innerText = data[6].name
            nombreUsuario.innerText = data[6].name
            email.innerText = data[6].email
            phone.innerText = data[6].phone
            website.innerText = data[6].website
                street.innerText = data[6].address.street
                suite.innerText = data[6].address.suite
                city.innerText = data[6].address.city
                zipcode.innerText = data[6].address.zipcode

       }) 
        //Descubrir que hacer en caso de que no me corresponda
        .catch((error) => console.log(error));

    //DOM = Document Object Model = Documento Modelo de Objeto
    //Semana 2: A partir de esta sesion vamos a identificar los elementos del HTML con un "id"
    
    //Creo una constante y le paso como valor el ID del H1 que esta en la linea 17 de mi HTML
    //con GetEelementById
    const titulo = document.getElementById("tituloEncabezado");

    //Imprimo la variable titulo, pero con el atributo textContent
    console.log(titulo.textContent); //textContent es una propiedad que me permite acceder al contenido de un elemento

};

consumirApi();

//TAREA EN INGLES HACER TODO