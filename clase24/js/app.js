let principal = document.querySelector("div");
window.onload =()=>{
     console.log(principal)
    principal.innerHTML=`
        <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-danger')" value="Cambiar color" />
        <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-primary'), cronometro()" value="Cambiar color" />
        <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-secondary'), detener()" value="Cambiar color" />
    `;
}
let colores =['bg-danger','bg-primary','bg-info','bg-success','bg-warning',
'gb-dark']
const cambiar=(color)=>{
    principal.classList.toggle(color)    
}
let segundos=55,minutos=58,hora=0;
let tiempo;
const detener =()=>{
    clearInterval(tiempo)
}
const cronometro=()=>{
     tiempo = setInterval(()=>{
        let inputs = document.querySelectorAll("input");
        inputs.forEach(element => {
            element.style.position="absolute"
            element.style.top=(numerosAleatorios()*30)+"px"
        });
        if(segundos < 59){
            segundos++
        }else if(segundos == 59){
            segundos=0;
            minutos++  
        }
        if(minutos < 59){
            // minutos++
        }else if(minutos == 59){
            minutos=0;
            hora++
        }if(hora==23){
            segundos=0;
            minutos=0;
            hora=0;
        }
        cambiar(colores[numerosAleatorios()])
        console.log(`${hora} : ${minutos}: ${segundos}`)
    },1000)
}
cronometro()
const numerosAleatorios=()=>{
    let longitud=colores.length;
    let numAle = Math.floor(Math.random()*(longitud -1))
    return numAle
}
// setInterval(numerosAleatorios,1000);
