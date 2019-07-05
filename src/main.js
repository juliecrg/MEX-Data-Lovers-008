const data = POKEMON.pokemon;//Traer la data y guardarla en una variable

//const botonNombre = document.getElementById("ButtonA")
const tarjetas =document.getElementById("tarjetas-pokemon")

const imprimData = (data) => { //variable para manipular la data
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
imprimData(data)
// botonNombre.addEventListener("click", imprimData)

const seccionPrinci =document.getElementById("seccion-principal")
const seccionNombre = document.getElementById("resultado-nombre")

//filtrar por nombre

const botonNombre = document.getElementById("boton-nombre")
const pokemonName = document.getElementById("input-pokemon").value.toLowerCase();


botonNombre.addEventListener('click' , () => {
    const result = data.filter(pokemon => pokemon.name.toLowerCase() == pokemonName)
    imprimData(result)
});

//filtrar por tipo

const pokemonList = document.getElementById("type-list")
const selectPokemon = pokemonList.options[pokemonList.selectedIndex].value

pokemonList.addEventListener("change", () => {
    const result =data.filter(pokemon => pokemon.type == selectPokemon)
    imprimData(result)
} );


        



















        // const filtrarNombre = () => { //variable para filtrar por nombre
    //     let nombrePokemon = inputNombre.value.toLowerCase();
    //     for (let poke of data){
    //         let dataPokemon = poke.name.toLowerCase();
    //         console.log(dataPokemon)
    //         if (dataPokemon.indexOf(nombrePokemon) !== -1){
    //             str += 
    //             `<div class = "PokemonBox"> <p>${} </p> 
    //             <img src="${}"></img>
    //             <p>Tipo: ${}</p>
    //             <p>Caramelos: ${}</p>
    //             <p>Hora: ${}</p>
    //             </div>`
    //             };
    //         };

