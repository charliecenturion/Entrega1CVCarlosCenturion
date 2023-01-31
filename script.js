let menuVisible = false;
// funcion que muestra o oculta el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }

}

//funcion para ocultar menu una vez elegida una opcion
function OcultarAlseleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false
}

// funcion que hacer mover la barra de habilidades
function efectosEnBarra(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("geografia");
        skills[1].classList.add("historia");
        skills[2].classList.add("finanzas");
        skills[3].classList.add("ingles");
        skills[4].classList.add("html-css-javascript");
        skills[5].classList.add("trabajo-en-equipo");
        skills[6].classList.add("comunicacion-efectiva");
        skills[7].classList.add("empatia");
        skills[8].classList.add("resolucion-de-problemas");
        skills[9].classList.add("adaptacion");
    }
}

// Para detectar si hay scroll y poder utilizar la barra de habilidades
window.onscroll = function(){
    efectosEnBarra();
}