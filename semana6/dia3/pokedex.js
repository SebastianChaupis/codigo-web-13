const obtenerPokemones =async()=>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await json();
    
}