//*async function obtenerDatos(){}
//*const obtenerDatos = async()=>{};

const imageProfile = document.querySelector("#img-profile");

const obtenerDatos = async()=>{
    const response = await fetch("https://api.github.com/users/SebastianChaupis");

    const data=await response.json();
    imageProfile.src=data.avatar_url;
    console.log(data);
};
obtenerDatos();
