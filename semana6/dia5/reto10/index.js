const rmContainer = document.querySelector("#row-rm")
const obtenerPersonajes = async()=>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);
    setPeronsajesView(data.results);
};
const setPeronsajesView =(results)=>{
    results.map(async(results,index) => {
        const html=`
            <div class="col-md-3 mb-5">
                <div class="card">
                    <div class="card-body card-custom-body"
                        style="background: linear-gradient(
                            0deg,
                            rgba(0,0,0,0.3),
                            rgba(0,0,0,0.3)),url('https://rickandmortyapi.com/api/character/avatar/${results.id}.jpeg'
                        )">
                        
                        <p class="badge bg-success">${results.status}</p>
                        <h4 >${results.name}</h1>
                        <div class="d-flex justify-content-between">
                            <div>
                            <span><i class="fa-solid fa-user"></i>&nbsp;${results.species}</span>
                            </div>
                            <div>
                            <span><i class="fa-solid fa-earth-americas"></i>&nbsp;${results.origin.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        rmContainer.innerHTML += html;
    });
};

obtenerPersonajes();