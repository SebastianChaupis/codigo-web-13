//resolve: es el encargado de retornar la respuesta cuando todo es correcto
//reject: es el encargado de retornar la respuesta cuando algo esta mal

const promesa = new Promise((resolve,reject)=>{
    //simulamos un tiempo de espera
        setTimeout(()=>{
            resolve("Todo bien");
            //Esta funcion esperará 3 segundos para poder retornar el resolve
        },3000);
});

//Como ejecutar la promesa
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}
getDataFromPromesa();

//Existe otra forma de poder leer una promesa, esta forma existia del async await 
// .then() => entonces || luego
// .then(callback)


const promesaConError =(validacion)=>{
    return new Promise((resolve, reject)=>{
        if(validacion){
            resolve("la validacion esta ok");
        }
        else{
            reject(new Error("Error en la validacion"));
        }
    });
};
promesaConError(false).then(respuesta=>{
    console.log(respuesta);
    //para poder detectar un error usamos el .catch()
    //si algo esta mal automaticamente entra al .catch()
})
.catch((error)=>{
    console.log(error.message);
});

const validacionAsync=async()=>{
    try {
        const respuesta = await promesaConError(true);
        
        console.log("validacionAsync",respuesta);
    } catch (error) {
        console.log("validacionAsync",error.message);
    }
};
validacionAsync();

//ejemplo real
/*const getUserGitHub = async()=>{
    try {
        const response = await fetch("https://api.github.com/users/SebastianChaupis");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
    getUserGitHub();
}*/

// veamos un poco de lo que es un status code
// un status code es un numero que retorna una peticion
// 200, 500, 401, 403, 404, 201, 512
// Si una peticion nos devuelve un status que sea 200, 201
// que la respuesta es ok
// 200 = ok
// 201 = ok y ademas significa que algo ha sido creado

// Si la url response un 500, 404, 512
// Hay un error
// 404 => Es el error que muestra cuando no encuentra la url, es decir la direccion no existe
// 500 => Es el error que retorna cuando hay un problema en el servidor
// 512 => Es un error de espacio en el servidor



