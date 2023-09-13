document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("btnBuscar");  
    boton.addEventListener("click", function(){  
        search();
    });
    
    function search(){
        fetch(`https://randomfox.ca/floof/?ref=apilist.fun`)
        .then(response => response.json()) 
        .then(data => {

            contenedor.innerHTML = "";
            
            const image = data.image;
            const link = data.link;
    
            contenedor.innerHTML += 
            `<div class="cont"
            <div class"imgs-container">
            <img class="imgs" src="${image}" alt="Imagen de Zorros">
            <legend> Link de la imagen ---> <a href="${link}">${link}</a></legend> 
            </div>
            <div class="info">
            <button class="btn btn-primary my-2" id="btnBuscarsiguiente">Siguiente</button>
            </div>
            </div>`;
            
            const btnSiguiente = document.getElementById("btnBuscarsiguiente");
            btnSiguiente.addEventListener("click", function(){
                search();
            });
        });
    };
});


    