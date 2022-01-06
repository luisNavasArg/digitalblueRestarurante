let miDiv = document.querySelector("#root");
function cargarListado(){
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    fetch(url)
    .then((response)=>{return response.json()})
    .then((objetoJson)=>{
        const pokemons = objetoJson.results;
        console.log(pokemons)
        pokemons.forEach((p)=>{
            miDiv.innerHTML+=`
                <button class="btn btn-info m-2 col-5" 
                onclick="crearImagen('${p.url}')">${p.name}</button> 
            `;
        })
    })
} 
cargarListado()
let img=" ";
const crearImagen=(url)=>{
    fetch(url).then(res=>{return res.json()}).then((obj)=>{
        img=obj;
        console.log(img);
        cargarCarta(img);
    })
}

const cargarCarta=(pk)=>{
    let contenedor = document.querySelector("#img");
    let moves = pk.moves;
    let mostrar ="";
    moves.forEach((p)=>{
        mostrar +=`<option class="card-text">${p.move.name}</option>`
    });
    
    console.log(mostrar)
    let plantilla=`
        <div class="card my-5" style="width: 18rem;">
            <img src="${pk.sprites.front_default}" class="card-img-top">
            <div class="card-head">
                <h5 class="card-title text-center">${pk.name}</h5>
            </div>
            <div class="card-body">
            <label>Movimientos</label>
                <select class="dorm-select">
                    ${mostrar}
                </select>
            </div>
        </div>
    `;
    contenedor.innerHTML=plantilla;
}