const data = POKEMON.pokemon; //Traer la data y guardarla en una variable
const botonNombre = document.getElementById("ButtonA")
const tarjetas =document.getElementById("tarjetas-pokemon")

const imprimData = () => { //variable para manipular la data
    let str = "";
    data.forEach(element =>{ //forEach sirve para recorrer los arreglos dentro de un objeto
        str += `<div class = "PokemonBox"> <p>${element.name}</p> 
        <img src="${element.img}"></img>
        <p>Tipo: ${element.type}</p>
        <p>Caramelos: ${element.candy_count} </p>
        <p>Hora: ${element.spawn_time} </p>
        </div>`
    });

    tarjetas.innerHTML =str
}

botonNombre.addEventListener("click", imprimData)