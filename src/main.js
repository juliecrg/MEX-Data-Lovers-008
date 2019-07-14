const data = POKEMON.pokemon;//Traer la data y guardarla en una variable

//const botonNombre = document.getElementById("ButtonA")
const tarjetas =document.getElementById("tarjetas-pokemon")

const imprimData = (data) => { //variable para manipular la data
    let str = "";
    data.forEach(element =>{ //forEach sirve para recorrer los arreglos dentro de un objeto


        str += `<div class = "col-4 box"> 
        <img src="${element.img}"></img>
        <p class= "p2">${element.name}</p> 
        <p> ${element.spawn_time} </p>
        <p class= "p1"> Tipo: ${element.type}
        Caramelos: ${element.candy_count} </p>
        
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
    nameResult = data.filter(pokemon => pokemon.name.toLowerCase() == textPokemon)
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

const orderName= document.getElementById("order-list")

orderName.addEventListener("change", () => {
    let aZza = orderName.value;
    if (aZza == "A-Z"){
        const result= data.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()
            ) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()
            ) return 1;
            return 0
        });
        imprimData(result);
    } 
    else {
        const result= data.sort((a,b)=>{
            if (a.name.toLowerCase() > b.name.toLowerCase()
            ) return -1;
            if (a.name.toLowerCase() < b.name.toLowerCase()
            ) return 1;
            return 0
        })
        imprimData(result);
    }

    } 
    );
    
   


(function(){
    var actualizarHora = function(){
           var fecha = new Date(),
               horas = fecha.getHours(),
               ampm,
               minutos = fecha.getMinutes(), 
               segundos = fecha.getSeconds(), 
               diaSemana = fecha.getDay(), 
               dia = fecha.getDate(), 
               mes = fecha.getMonth(), 
               year = fecha.getFullYear();
   
   
               var pHoras = document.getElementById('horas'),
               pAMPM = document.getElementById('ampm'),
               pMinutos = document.getElementById('minutos'),
               pSegundos = document.getElementById('segundos'),
               pDiaSemana = document.getElementById('diaSemana'),
               pDia = document.getElementById('dia'),
               pMes = document.getElementById('mes'),
               pYear = document.getElementById('year');
   
            var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            pDiaSemana.textContent = semana[diaSemana];
   
            pDia.textContent = dia;
   
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
   
            pMes.textContent = meses[mes];
   
            pYear.textContent = year;
   
            if(horas >= 12){
             horas = horas - 12;
             ampm = 'PM';
            }else{
             ampm = 'AM';
            }
           
           if(horas == 0){
            horas = 12;
           };
   
           pHoras.textContent = horas;
           pAMPM.textContent = ampm;
   
             if(minutos <10){ minutos = "0" + minutos};
             if(segundos < 10){ segundos = "0" + segundos};
           pMinutos.textContent = minutos;
           pSegundos.textContent = segundos;
   
    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
   }())