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

//Fetches GitHub users from the public API

const fetchGitHubUsers = () => {
    fetch("https://api.github.com/users") // Fetch data from Github Api
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => console.log(data.results)) // GitHub response is the array itself
        .catch((error) => console.log("API Error:", error)); // Handle errors
};

fetchApiData();


const fetchGitHubUsers = () => {
    // Initiate a GET request to GitHub's public users endpoint
    fetch("https://api.github.com/users")
        .then((response) => {
            // Check if the HTTP response was successful (status 200-299)
            if (!response.ok) {
                throw new Error(`GitHub API Error: HTTP ${response.status}`);
            }
            // Parse the JSON response body
            return response.json();
        })
        .then((users) => {
            // Process the parsed user data (in this case, just log it)
            console.log("GitHub Users:", users);
        })
        .catch((error) => {
            // Handle any errors that occurred during the fetch or processing
            console.error("Request Failed:", error);
        })
}

fetchApiData();


