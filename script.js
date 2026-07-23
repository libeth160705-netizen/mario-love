// =================================
// INICIO DEL JUEGO
// =================================


const boton = document.getElementById("btnJugar");
const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");


boton.onclick = function(){

    inicio.style.display = "none";

    juego.style.display = "block";

};





// =================================
// MOVIMIENTO DE MARIO
// =================================


const mario = document.getElementById("mario");
const princesa = document.getElementById("princesa");


let posicion = 40;

let princesaEncontrada = false;



document.addEventListener("keydown", function(e){


    if(e.key === "ArrowRight"){

        posicion += 20;

    }



    if(e.key === "ArrowLeft"){

        posicion -= 20;

    }



    // límites

    if(posicion < 0){

        posicion = 0;

    }



    if(posicion > window.innerWidth - 100){

        posicion = window.innerWidth - 100;

    }



    mario.style.left = posicion + "px";


    revisarMonedas();


    revisarPrincesa();



});







// =================================
// MONEDAS Y RECUERDOS
// =================================


const recuerdos = {


    moneda1:{

        foto:"img/foto1.jpg",

        titulo:"❤️ Nuestro primer recuerdo ❤️",

        texto:"Desde que llegaste a mi vida comenzó una aventura muy bonita."


    },


    moneda2:{

        foto:"img/foto2.jpg",

        titulo:"🌹 Momentos contigo 🌹",

        texto:"Gracias por cada sonrisa, cada abrazo y cada momento especial."


    },


    moneda3:{

        foto:"img/foto3.jpg",

        titulo:"✨ Nuestra historia ✨",

        texto:"Quiero seguir creando muchos recuerdos contigo."


    },


    moneda4:{

        foto:"img/foto4.jpg",

        titulo:"💖 Siempre juntos 💖",

        texto:"Gracias por formar parte de mi vida. Te quiero mucho ❤️"


    }


};





const recuerdo = document.getElementById("recuerdo");

const foto = document.getElementById("fotoRecuerdo");

const titulo = document.getElementById("tituloRecuerdo");

const texto = document.getElementById("textoRecuerdo");

const cerrarRecuerdo = document.getElementById("cerrarRecuerdo");





function abrirRecuerdo(id){


    foto.src = recuerdos[id].foto;


    titulo.innerHTML = recuerdos[id].titulo;


    texto.innerHTML = recuerdos[id].texto;


    recuerdo.style.display = "flex";


}





cerrarRecuerdo.onclick=function(){

    recuerdo.style.display="none";

};








// =================================
// DETECTAR MONEDAS
// =================================


const monedas = document.querySelectorAll(".moneda");



function revisarMonedas(){


    monedas.forEach(function(moneda){



        if(moneda.style.display === "none"){

            return;

        }



        let marioCaja = mario.getBoundingClientRect();

        let monedaCaja = moneda.getBoundingClientRect();




        if(

            marioCaja.right > monedaCaja.left &&

            marioCaja.left < monedaCaja.right &&

            marioCaja.bottom > monedaCaja.top &&

            marioCaja.top < monedaCaja.bottom

        ){


            abrirRecuerdo(moneda.id);


            moneda.style.display="none";


        }



    });


}







// =================================
// CARTA FINAL CON PRINCESA
// =================================


const cartaFinal = document.getElementById("cartaFinal");

const cerrarCartaFinal = document.getElementById("cerrarCartaFinal");




function revisarPrincesa(){


    if(princesaEncontrada){

        return;

    }




    let marioCaja = mario.getBoundingClientRect();

    let princesaCaja = princesa.getBoundingClientRect();





    if(

        marioCaja.right >= princesaCaja.left

    ){


        cartaFinal.style.display="flex";


        princesaEncontrada=true;


    }



}





cerrarCartaFinal.onclick=function(){


    cartaFinal.style.display="none";


};









// =================================
// MÚSICA
// =================================


const musica = document.getElementById("musica");

const sonido = document.getElementById("sonido");


let encendido = false;




sonido.onclick=function(){



    if(encendido === false){


        musica.play();


        sonido.innerHTML="🔇 Silenciar";


        encendido=true;



    }else{


        musica.pause();


        sonido.innerHTML="🎵 Música";


        encendido=false;


    }


};
// ===============================
// CONTROLES PARA CELULAR
// ===============================

const btnIzquierda = document.getElementById("izquierda");
const btnDerecha = document.getElementById("derecha");

function moverMario(direccion){

    if(direccion === "derecha"){
        posicion += 20;
    }

    if(direccion === "izquierda"){
        posicion -= 20;
    }

    if(posicion < 0){
        posicion = 0;
    }

    if(posicion > window.innerWidth - 100){
        posicion = window.innerWidth - 100;
    }

    mario.style.left = posicion + "px";

    revisarMonedas();

    revisarPrincesa();

}

// Eventos para celular
btnDerecha.addEventListener("click", function(){

    moverMario("derecha");

});

btnIzquierda.addEventListener("click", function(){

    moverMario("izquierda");

});