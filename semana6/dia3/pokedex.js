const pokemonContainer = document.querySelector("#row-pokemons");
const pokemonName =document.querySelector("#pokemon-name");
const pokemonImg = document.querySelector("#pokemon-image");


const obtenerPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

    const data = await response.json();
    console.log(data.results);
    setPokemonsInView(data.results);
}

//Funcion que se encarga de poder pintar nuestros pokemones
const setPokemonsInView = (results) => {
    results.map(async(results, index) => {

        const bgcolor = await getColorPokemon(index+1);
        console.log(bgcolor);
        //en cada iteracion agregar un elemnto
        const html = `
        <div class="col-md-3 mt-3">
            <div class='card'style='background-color:${bgcolor}'>
            <img class='card-img-top' width='200' height='200' 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg'>
                <div class='card-body text-center'>
                    <h6 class='text-white text-title'>N° ${index+1}</h6>
                    <h4 class='text-title'>${results.name}</h4>
                </div>
                <div class='d-grid gap-1'>
                    <button class='btn btn-primary' onclick='obtenerDetallePokemon("${results.url}")' data-bs-toggle='modal' data-bs-target='#modalPoke'>
                        Detalle
                    </button>
                </div>
            </div>
        </div>`;
        pokemonContainer.innerHTML += html;
    });
};
const obtenerDetallePokemon =async(url)=>{
    const response= await fetch(url);
    const data = await response.json();
    pokemonName.innerHTML= data.name;
    pokemonImg.src=data.sprites.other.dream_world.front_default;
};
obtenerPokemones();

const getColorPokemon=async(id)=>{
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();
    const color = {
        red: "rgba(166, 67, 39)",
        green:"rgba(63,138,63)",
        blue:"rgba(42, 94, 161)",
        yellow:"rgba(192, 188, 26)",
        pink:"rgba(224, 78, 98)",
        brown:"rgba(101, 37, 42)",
        purple:"rgba(98, 37, 91)",
        gray:"rgba(121, 121, 131)",
        black:"rgba(25, 33, 38)",
        
    }

    return color[data.color.name];
}

