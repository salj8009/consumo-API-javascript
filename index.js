const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers : {
        'Content-Type' : 'aplicatio/json;charset=utf-8',
    },
    params : {
        'api_key' : API_KEY,
    },
});

async function getPeliculasTendencia() {
    const { data } = await api('trending/movie/day');

    const peliculas = data.results;
    //console.log(peliculas);
    const articuloPelicula = document.createElement('ARTICLE');
    articuloPelicula.classList.add('contenedor-tendencias__imagenes');

    contenedorTendencias.innerHTML = '';

    peliculas.map(pelicula => {        

        const imgPelicula = document.createElement('IMG');
        imgPelicula.classList.add('tendencias__imagenes');
        imgPelicula.setAttribute('alt' , pelicula.title);
        imgPelicula.setAttribute('src', `https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`);

        articuloPelicula.appendChild(imgPelicula);
        contenedorTendencias.appendChild(articuloPelicula);
    })
};


async function getGeneros() {
    const { data } = await api('genre/movie/list');

    const generos = data.genres;
    //console.log(generos);

    const articuloGenero = document.createElement('ARTICLE');
    articuloGenero.classList.add('articulo-contenedor-generos');

    contenedorGeneros.innerHTML = '';

    generos.map(genero => {
        
        const parrafoGenero = document.createElement('P');
        parrafoGenero.classList.add('parrfo__genero');
        parrafoGenero.setAttribute('id', `parrfo__genero__${genero.id}`);
        parrafoGenero.textContent = genero.name;

        articuloGenero.appendChild(parrafoGenero);
        contenedorGeneros.appendChild(articuloGenero);

        parrafoGenero.addEventListener('click' , () => {
            //console.log(genero.id);
            const miID = genero.id;
            getGeneroLista(miID);
        })
        
    });
    
};

async function getGeneroLista(id) {
    const { data } = await api(`discover/movie/${id}`);
    /*{
        params : {
            with_genres: id,
        },
    });*/
    
    contenedorGeneros.innerHTML = '';

    const generos = data.results;

    const generoPorId = document.createElement('ARTICLE');
        generoPorId.classList.add('genero-id');

    generos.map(genero => {
        //console.log(genero)

        const divGeneroVoto = document.createElement('DIV');
        divGeneroVoto.classList.add('genero-voto');


        const imgGeneroPelicula = document.createElement('IMG');
            imgGeneroPelicula.classList.add('genero-img');
            imgGeneroPelicula.setAttribute('src', `https://image.tmdb.org/t/p/w300/${genero.poster_path}`);

            const spanRanking = document.createElement('SPAN');
            spanRanking.classList.add('genero-ranking' , 'ocultar');
            spanRanking.textContent = genero.vote_average;

            divGeneroVoto.appendChild(imgGeneroPelicula);
            divGeneroVoto.appendChild(spanRanking);
            generoPorId.appendChild(divGeneroVoto);          
            contenedorGeneros.appendChild(generoPorId);

            imgGeneroPelicula.addEventListener('mouseover' , ()=>{
                //console.log(genero.vote_average);
                spanRanking.classList.toggle('ocultar');
            })
    });
    

    

}

/*async function getBuscar() {
    const { data } = await api('discover/movie/', {
        params : {
            with_genres: id,
        },
    });

    btnBuscar.addEventListener('click' , ()=> {
       console.log(inputBuscar.value);
       location.hash = `#search=${inputBuscar.value}`; 
    });
    
}*/
