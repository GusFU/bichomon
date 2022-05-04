console.log(document.title);
//cambiar el titulo de generacion 1
let titulo = document.querySelector("#gen-1");
titulo.innerHTML = "Generasión 1 Pokimon"


//cambiar el color de la generacion 1
let primeragen = document.querySelector(".infocard-list");
primeragen.style.background = "blue";



//imprimir url pagina
console.log(document.URL);



//imprimir dominio pagina
console.log(document.domain);



//imprimir imagenes
let imagenes = document.getElementsByTagName("img");
console.log(imagenes);



//sustituir imagenes
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

}



//selecionar flying
let voladores = document.getElementsByClassName("flying")
for (let i = 0; i < voladores.length; i++) {
    voladores[i].style.backgroundColor = "red"

}