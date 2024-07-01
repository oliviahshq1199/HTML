let recetas = [{
    title:"recetas faciles",
    url: "recetas.html"
},]

function LoadMenu(contenido) {
    let menuElem= document.getElementById("menu");

    for  (i = 0; i < contenido.length; i++) {
        elem = document.createElement("li");
        a = document.createElement("a");
        
        a.innerHTML = contenido[i].title;
        a.href = contenido[i].url;

        elem.appendChild(a);

        menuElem.appendChild(elem);
    }
}

function LoadContenido() {
    let contenido= document.getElementById("contenido"); 
     
    fetch("./recetas.html").then((response) => {
        contenido.innerHTML(response);
    })
}

document.addEventListener("DOMContentLoaded", function(){
    LoadMenu(recetas)
})
