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
var imagenes = document.querySelectorAll("img");
let imag=[]
for(let j = 0;j<imagenes.length;j++){
   imag+=imagenes[j].src+" "
}
console.log(imag);



//sustituir imagenes
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

}



//selecionar flying
let voladores = document.querySelectorAll(".flying")
for (let i = 0; i < voladores.length; i++) {
    voladores[i].style.backgroundColor = "red"

}