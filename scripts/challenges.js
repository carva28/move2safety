
let vari_scale_incr = 0.0,vari_scale_incr_veneno = 0.0,vari_scale_incr_veneno_Inimigo = 0.0;
let nivelJogo = 400;
let pontosExtras, veneno;
let countVeneno = 3, countExtras = 0;
var videoValorTr = false;
var control_poder,control_perder;
let vitorias = 0,estado_vitoria,estadoInimigo;

function validarCamara(videoValorTr){
    if (videoValorTr) {
        defineImagem();
    } else {
        console.log("Não tem permissões")
    } 
}

function definirInimigo() {
    estadoInimigo = true;
    document.getElementById('inimigo').style.display = "block";

    var escolheAtaque = Math.random() * (8 - 0) + 0;

    if (escolheAtaque > 0 && escolheAtaque <5) {
        loadBoltPower();
    }else if (escolheAtaque >= 5 && escolheAtaque <= 8) {
        var escolherBolaInimigo = Math.random() * (50 - 40) + 40;
        document.getElementById('obstaculos').innerHTML += "<img id='bolas_inimigo' src='images/ball_enemie_1.png' />";
        document.getElementById('bolas_inimigo').style.transform = "scale("+ 0 +")";
        document.getElementById('bolas_inimigo').style.left = escolherBolaInimigo + "%";
        controlo_Inimigo = setInterval(moveBolas,nivelJogo);
    }

}

function defineImagem() {
    estadoInimigo = false;
    var escolheImagem = Math.random() * (8 - 0) + 0;

    if (escolheImagem > 0 && escolheImagem <3) {
        loadBoltPower();
    } else if (escolheImagem >= 3 && escolheImagem < 6) {
        loadVeneno();
    } else if (escolheImagem >= 6 && escolheImagem <= 8) {
        loadWikness();
    }
}

function loadBoltPower(){
    document.getElementById('obstaculos').innerHTML += "<img id='poder' src='images/poder.png' />";
    document.getElementById('poder').style.transform = "scale("+ 0 +")";
    document.getElementById('poder').style.left = 48 + "%";
    control_poder = setInterval(movePoder,nivelJogo);
}

function loadVeneno(){
    document.getElementById('obstaculos').innerHTML += "<img id='fraqueza' src='images/posion.png' />";
    document.getElementById('fraqueza').style.transform = "scale("+ 0 +")";
    document.getElementById('fraqueza').style.left = 48 + "%";
    control_perder = setInterval(moveVeneno,nivelJogo);

}

function loadWikness(){


    document.getElementById('obstaculos').innerHTML += "<img id='fraqueza' src='images/fogo.png' />";
    document.getElementById('fraqueza').style.transform = "scale("+ 0 +")";

    document.getElementById('fraqueza').style.left = 48 + "%";
    control_perder = setInterval(moveFogo,nivelJogo);
}





function movePoder() {
    vari_scale_incr=vari_scale_incr + 0.09;
    if(vari_scale_incr < 1){
        document.getElementById('poder').style.transform = "scale("+ vari_scale_incr +")";

    } else {
        document.getElementById('poder').style.transform = "scale("+ 1 +")";
    }

    if (document.getElementById('poder').offsetTop < (window.innerHeight - 116)) {
        document.getElementById('poder').style.display = "block";
        document.getElementById('poder').style.top = document.getElementById('poder').offsetTop + 30  + "px";

    } else
    {
        document.getElementById('poder').style.display = "none";
        limparPoder();
    }

    let VacaLoura = {
        x:document.getElementById("vacaLoura_img").offsetLeft,
        y:document.getElementById("vacaLoura_img").offsetTop,
        width: document.getElementById("vacaLoura_img").offsetWidth,
        height: document.getElementById("vacaLoura_img").offsetHeight,
    } 

    let start = {
        x:document.getElementById("poder").offsetLeft,
        y:document.getElementById("poder").offsetTop,
        width: document.getElementById("poder").offsetWidth,
        height: document.getElementById("poder").offsetHeight,
    } 
    pontosExtras = collides(VacaLoura, start);


}

function moveVeneno() {


    vari_scale_incr_veneno=vari_scale_incr_veneno + 0.09;
    if(vari_scale_incr_veneno < 1){
        document.getElementById('fraqueza').style.transform = "scale("+ vari_scale_incr_veneno +")";

    } else {
        document.getElementById('fraqueza').style.transform = "scale("+ 1 +")";
    }

    if (document.getElementById('fraqueza').offsetTop < (window.innerHeight - 116)) {
        document.getElementById('fraqueza').style.display = "block";
        document.getElementById('fraqueza').style.top = document.getElementById('fraqueza').offsetTop + 30  + "px";

    } else
    {
        document.getElementById('fraqueza').style.display = "none";
        limparVeneno();
    }



    let VacaLoura = {
        x:document.getElementById("vacaLoura_img").offsetLeft,
        y:document.getElementById("vacaLoura_img").offsetTop,
        width: document.getElementById("vacaLoura_img").offsetWidth,
        height: document.getElementById("vacaLoura_img").offsetHeight,
    } 

    let start = {
        x:document.getElementById("fraqueza").offsetLeft,
        y:document.getElementById("fraqueza").offsetTop,
        width: document.getElementById("fraqueza").offsetWidth,
        height: document.getElementById("fraqueza").offsetHeight,
    } 
    veneno = collides(VacaLoura, start);

}

function moveFogo() {


    vari_scale_incr_veneno=vari_scale_incr_veneno + 0.09;
    if(vari_scale_incr_veneno < 1){
        document.getElementById('fraqueza').style.transform = "scale("+ vari_scale_incr_veneno +")";

    } else {
        document.getElementById('fraqueza').style.transform = "scale("+ 1 +")";
    }

    if (document.getElementById('fraqueza').offsetTop < (window.innerHeight - 116)) {
        document.getElementById('fraqueza').style.display = "block";
        document.getElementById('fraqueza').style.top = document.getElementById('fraqueza').offsetTop + 30  + "px";

    } else
    {
        document.getElementById('fraqueza').style.display = "none";
        limparVeneno();
    }



    let VacaLoura = {
        x:document.getElementById("vacaLoura_img").offsetLeft,
        y:document.getElementById("vacaLoura_img").offsetTop,
        width: document.getElementById("vacaLoura_img").offsetWidth,
        height: document.getElementById("vacaLoura_img").offsetHeight,
    } 

    let start = {
        x:document.getElementById("fraqueza").offsetLeft,
        y:document.getElementById("fraqueza").offsetTop,
        width: document.getElementById("fraqueza").offsetWidth,
        height: document.getElementById("fraqueza").offsetHeight,
    } 
    veneno = collides(VacaLoura, start);

}

function moveBolas() {
    vari_scale_incr_veneno_Inimigo=vari_scale_incr_veneno_Inimigo + 0.09;
    if(vari_scale_incr_veneno_Inimigo < 1){
        document.getElementById('bolas_inimigo').style.transform = "scale("+ vari_scale_incr_veneno_Inimigo +")";

    } else {
        document.getElementById('bolas_inimigo').style.transform = "scale("+ 1 +")";
    }

    if (document.getElementById('bolas_inimigo').offsetTop < (window.innerHeight - 116)) {
        document.getElementById('bolas_inimigo').style.display = "block";
        document.getElementById('bolas_inimigo').style.top = document.getElementById('bolas_inimigo').offsetTop + 30  + "px";

    } else
    {
        document.getElementById('bolas_inimigo').style.display = "none";
        limparAtaque();
    }

    let VacaLoura = {
        x:document.getElementById("vacaLoura_img").offsetLeft,
        y:document.getElementById("vacaLoura_img").offsetTop,
        width: document.getElementById("vacaLoura_img").offsetWidth,
        height: document.getElementById("vacaLoura_img").offsetHeight,
    } 

    let start = {
        x:document.getElementById("bolas_inimigo").offsetLeft,
        y:document.getElementById("bolas_inimigo").offsetTop,
        width: document.getElementById("bolas_inimigo").offsetWidth,
        height: document.getElementById("bolas_inimigo").offsetHeight,
    } 
    veneno = collides(VacaLoura, start);    

}



function limparPoder(){


    vari_scale_incr = 0.0;
    document.getElementById('poder').style.top = 0;
    document.getElementById('poder').style.left = 0;
    document.getElementById('poder').style.transform = "scale("+ 0 +")";


    clearInterval(control_poder);
    document.getElementById('obstaculos').innerHTML = "";



    if(pontosExtras == true){

        countExtras++;
        document.getElementById('extras').innerHTML = countExtras;

        if(countExtras >= 3){

            if(estadoInimigo == true && vitorias == 1){
                clearInterval(controlo_Inimigo);

                var x = document.createElement("AUDIO");
                if (x.canPlayType("audio/mpeg")) {
                    x.setAttribute("src","sons/vitoria.mp3");
                }
                x.setAttribute("autoplay", "controls");
                document.body.appendChild(x);

            }else if(estadoInimigo == true){
                vitorias++;
                clearInterval(controlo_Inimigo);

                var x = document.createElement("AUDIO");
                if (x.canPlayType("audio/mpeg")) {
                    x.setAttribute("src","sons/vitoria.mp3");
                }
                x.setAttribute("autoplay", "controls");
                document.body.appendChild(x);

                document.getElementById('inimigo').src="images/enemie2.png";


                setTimeout(function(){  window.open("./fim.html",'_self'); }, 2500);



            }else{
                countExtras = 0; 
                document.getElementById('extras').innerHTML = countExtras;
                var x = document.createElement("AUDIO");
                if (x.canPlayType("audio/mpeg")) {
                    x.setAttribute("src","sons/insecto.mp3");
                }
                x.setAttribute("autoplay", "controls");
                document.body.appendChild(x);
                definirInimigo();
            }

        }else{
            var x = document.createElement("AUDIO");
            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/ponto.mp3");
            }
            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);

            document.getElementById('inimigo').src="images/enemie2.png";

            setTimeout(function(){  document.getElementById('inimigo').src="images/enemie.png"; }, 1000);

            if(estadoInimigo == true && vitorias <= 0){
                definirInimigo();
            } else{
                defineImagem();
            }

        }


    }else if(estadoInimigo == true && vitorias <= 0){
        definirInimigo();
    }else{
        defineImagem();
    }

}


function limparAtaque(){
    vari_scale_incr_veneno_Inimigo = 0.0;

    if(estadoInimigo == true && vitorias==0){
        clearInterval(controlo_Inimigo);
        document.getElementById('bolas_inimigo').style.top = 0;
        document.getElementById('bolas_inimigo').style.left = 0;
        document.getElementById('bolas_inimigo').style.transform = "scale("+ 0 +")";

    }else if(estadoInimigo == true && vitorias==1){
        clearInterval(controlo_Inimigo);
        document.getElementById('bolas_inimigo').style.top = 0;
        document.getElementById('bolas_inimigo').style.left = 0;
        document.getElementById('bolas_inimigo').style.transform = "scale("+ 0 +")";

    }

    document.getElementById('obstaculos').innerHTML = "";


    if(veneno == true){
        countVeneno--;
        //document.getElementById('total_adquiridos').innerHTML = countVeneno;

        if (countVeneno == 2) {
            document.getElementById('vida3').src = './images/sem_vida.png';
        } else if (countVeneno == 1) {
            document.getElementById('vida2').src = './images/sem_vida.png';
        } else if (countVeneno == 0) {
            document.getElementById('vida1').src = './images/sem_vida.png';
        }

        if (countVeneno <= 0) {
            var x = document.createElement("AUDIO");

            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/perder_jogo.mp3");
            }

            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);
            setTimeout(function(){  window.open("./fim_perdeu.html",'_self'); }, 2500);


        }else if(estadoInimigo == true && vitorias <= 0){
            definirInimigo();
            var x = document.createElement("AUDIO");

            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/perder_ponto.mp3");
            }

            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);
        }  else {
            definirInimigo();
            var x = document.createElement("AUDIO");

            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/perder_ponto.mp3");
            }

            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);
        }
    }else if(estadoInimigo == true && vitorias <= 0){
        definirInimigo();
    } else {
        definirInimigo();

    }

}


function limparVeneno(){

    vari_scale_incr_veneno = 0.0;

    console.log(document.getElementById('fraqueza').style.top);

    document.getElementById('fraqueza').style.top = 0;
    document.getElementById('fraqueza').style.left = 0;
    document.getElementById('fraqueza').style.transform = "scale("+ 0 +")";

    document.getElementById('obstaculos').innerHTML = "";


    if(veneno == true){
        countVeneno--;
        //document.getElementById('total_adquiridos').innerHTML = countVeneno;

        if (countVeneno == 2) {
            document.getElementById('vida3').src = './images/sem_vida.png';
        } else if (countVeneno == 1) {
            document.getElementById('vida2').src = './images/sem_vida.png';
        } else if (countVeneno == 0) {
            document.getElementById('vida1').src = './images/sem_vida.png';
        }

        if (countVeneno <= 0) {
            var x = document.createElement("AUDIO");

            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/perder_jogo.mp3");
            }

            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);

        }else if(estadoInimigo == true && vitorias <= 0){
            definirInimigo();
        }  else {
            defineImagem();
            var x = document.createElement("AUDIO");

            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src","sons/perder_ponto.mp3");
            }

            x.setAttribute("autoplay", "controls");
            document.body.appendChild(x);
        }
    }else if(estadoInimigo == true && vitorias <= 0){
        definirInimigo();
    } else {
        defineImagem();
    }
}
