const URL = "https://622ab12714ccb950d222bd2f.mockapi.io/api/v1/movies";
const containerMovies= document.querySelector("#container-videos");

const getMovies = async () => {
    try {
        const response = await fetch(URL);
        const data = response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error.message);
    }
};
const groupMovies = async () => {
    const marvelMovies = [];
    const dcMovies = [];
    const randomMovies = [];

    const movies = await getMovies();
    movies.forEach(movie => {
        const { gender } = movie;
        if (gender == "Marvel") {
            marvelMovies.push(movie);
        }
        else if (gender == "DC") {
            dcMovies.push(movie);
        }
        else {
            randomMovies.push(movie);
        }
    });
    renderMovie(marvelMovies,"Marvel");
    renderMovie(dcMovies,"DC");
    renderMovie(randomMovies,"Random");
}
const renderMovie = (arregloPeliculas, titulo) => {
    const html = `<div class="col-md-12">
                    <h4 class="gender-movie">${titulo}</h4>
                    <div class="row">
                        ${arregloPeliculas.map((pelicula) =>(
                          `<div class="col-md-3">
                            <video class="video" controls poster=${pelicula.wallpaper}>
                                <source src=${pelicula.video_link} />
                            </video>
                            <h5 class="title">
                                ${pelicula.name}
                            </h5>
                             <p class="subtitle">
                                ${pelicula.director}
                            </p>
                        </div>`
                        ))}
                    </div>
                </div>`;
    containerMovies.innerHTML += html;
}
groupMovies();
