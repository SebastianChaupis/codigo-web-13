//*async function obtenerDatos(){}
//*const obtenerDatos = async()=>{};


const imageProfile = document.querySelector("#img-profile");
const nameUser = document.querySelector("#name-user");
const githubName = document.querySelector("#github-name-user");
const followers_Number = document.querySelector("#followers");
const following_Number = document.querySelector("#following");
const twitterUser = document.querySelector("#twitter-user");
const locationUser = document.querySelector("#location-user");
const companyUser= document.querySelector("#company-user");
const githubUser= document.querySelector("#github-user")
const joinedUser = document.querySelector("#joined-user");
const bioUser = document.querySelector("#bio-user");

const repos= document.querySelector("#repos");
//Input y boton
const githubActionSearch = document.querySelector("#github-action-search");
const githubSearch= document.querySelector("#github-search");

githubActionSearch.onclick =()=>{
    const username = githubSearch.value;
    if(username==""){
        Swal.fire({
            icon:'error',
            title:'error',
            text:'Llenar el campo usuario'
        })        
        return;
    }
    obtenerDatos(username);
}
//Detectar el enter cuando estemos en el input
githubSearch.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        obtenerDatos(event.target.value);
    }
});

const obtenerDatos = async(username= "SebastianChaupis")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data=await response.json();

    if(data.message=="Not Found"){
        Swal.fire({
            icon:'error',
            title:'Usuario no encontrado',
            text:'No existe el usuario',
        });
        return;
    };

    const formatData=(fecha)=>{
        let yourDate = new Date(fecha)
        return yourDate.toISOString().split("T")[0];
    }

    nameUser.innerHTML= data.name;
    githubName.innerHTML=`@${data.login}`;
    bioUser.innerHTML=data.bio;
    imageProfile.src=data.avatar_url;
    followers.innerHTML=(data.followers);
    following.innerHTML=(data.following);
    repos.innerHTML=(data.public_repos);
    twitterUser.innerHTML= data.twitter_username;
    locationUser.innerHTML=data.location;
    companyUser.innerHTML=data.company;
    githubUser.innerHTML=data.html_url;
    joinedUser.innerHTML=formatData(data.created_at);
};
obtenerDatos();
