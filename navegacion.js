imgHome.addEventListener('click' , () =>{
    location.hash = '';
    homePaage();
})

imgBusqueda.addEventListener('click', () => {
    location.hash = '#search=';
    busqueda();
});

window.addEventListener('DOMContentLoaded',navegacion,false);
window.addEventListener('hashchange', navegacion,false);


function navegacion() {
    if(location.hash.startsWith('#search=')){
        busqueda();
    }else{
        homePaage();
    }
};

function busqueda(){
    contenedorTendencias.classList.add('ocultar');
    contenedorGeneros.classList.add('ocultar');
    contenedorBusqueda.classList.remove('ocultar');
    subTendencias.classList.add('ocultar');
    subGenero.classList.add('ocultar');

    getBuscar();

    console.log('busqueda');
};

function homePaage(){
    contenedorBusqueda.classList.add('ocultar');
    contenedorTendencias.classList.remove('ocultar');
    contenedorGeneros.classList.remove('ocultar'); 
    
    getPeliculasTendencia();
    getGeneros();

    console.log('homePage');
};