const data = POKEMON.pokemon;//Traer la data y guardarla en una variable

//const botonNombre = document.getElementById("ButtonA")
const tarjetas =document.getElementById("tarjetas-pokemon")

const imprimData = (data) => { //variable para manipular la data
    let str = "";
    data.forEach(element =>{ //forEach sirve para recorrer los arreglos dentro de un objeto
        str += `<div class = "boxPokemon"> <p>${element.name}</p> 
        <img src="${element.img}"></img>
        <p>Tipo: ${element.type}</p>
        <p>Caramelos: ${element.candy_count} </p>
        <p>Hora: ${element.spawn_time} </p>
        </div>`
    });

    tarjetas.innerHTML =str
}
imprimData(data)
// botonNombre.addEventListener("click", imprimData)

const seccionPrinci =document.getElementById("seccion-principal")
const seccionNombre = document.getElementById("resultado-nombre")

//filtrar por nombre

const botonNombre = document.getElementById("boton-nombre")
const pokemonName = document.getElementById("input-pokemon")


botonNombre.addEventListener('click' , () => {
    let nameResult= "";
    let textPokemon = pokemonName.value.toLowerCase();
    let nameResult = data.filter(pokemon => pokemon.name.toLowerCase() == textPokemon)
    imprimData(nameResult)
});

//filtrar por tipo

const pokemonList = document.getElementById("type-list")

pokemonList.addEventListener("change", () => {
    let typePokemon = pokemonList.value;
    let typeResult =data.filter(pokemon => pokemon.type[0] == typePokemon)
    imprimData(typeResult)
} );

//ordenar de la a-z

const botonAz= document.getElementById("ButtonB")

botonAz.addEventListener("click", () => {
    const result= data.sort((a,b)=>{
        if (a.name.toLowerCase() < b.name.toLowerCase()
        ) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()
        ) return 1;
        return 0
    })
    imprimData(result)
});

//ordenar de la z-a

const botonZa= document.getElementById("ButtonB1")

botonZa.addEventListener("click", () => {
    const result= data.sort((a,b)=>{
        if (a.name.toLowerCase() > b.name.toLowerCase()
        ) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()
        ) return 1;
        return 0
    })
    imprimData(result)
});








