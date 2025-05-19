//En JS tenemos las funciones de tipo flecha
//Utilizaresmos fetch que es un metodo para consumir una API

const consumirApi = () => {
    fetch ("https://jsonplaceholder.typicode.com/users") //fetch es una promesa. Es una funcion
    //convertimos la respuesta a JSON
    .then ((response) => response.json ())
   //Los datos los vamos a mandar a la consola 
   .then ((data) => console.log(data)) //puede ser otro nombre, no necesariamente data
   //Descubrir que hacer en caso de que no me corresponda
   .catch((error) => console.log(error));
};


consumirApi();

//TAREA EN INGLES HACER TODO
//Consumir otra API y mostrar como aqui arriba


