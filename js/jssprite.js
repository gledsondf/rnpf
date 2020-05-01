$(document).ready(function(){

if (
  document.fullscreenElement || /* Standard syntax */
  document.webkitFullscreenElement || /* Chrome, Safari and Opera syntax */
  document.mozFullScreenElement ||/* Firefox syntax */
  document.msFullscreenElement /* IE/Edge syntax */
) {

}

//pega a largura e altura da página

var $tamanhoTelaH = $(window).height()+150;
var $tamanhoTelaW = $(window).width();

//deixa a tela principal do tamanho do view
$(".tela-h").css("height",$tamanhoTelaH+"px");

//responsável pelo posicionamento do terreno nível 1
var $terraGramaHn1 = $tamanhoTelaH*0.2;
var $terraGramaHn2 = $tamanhoTelaH*0.4;
var $terraGramaHn3 = $tamanhoTelaH*0.6;

$("#terra-grama0").css("height",$terraGramaHn1+"px");
$("#terra-grama0").css("width",$tamanhoTelaW*20+"px");
$("#terra-grama0").css("top",$tamanhoTelaH-$terraGramaHn1+"px");
$("#terra-grama0").css("left",$tamanhoTelaW*6+"px");

$("#terra-grama1").css("height",$terraGramaHn1+"px");
$("#terra-grama1").css("width",$tamanhoTelaW+"px");
$("#terra-grama1").css("top",$tamanhoTelaH-$terraGramaHn1+"px");

$("#terra-grama2").css("height",$terraGramaHn2+"px");
$("#terra-grama2").css("width",$tamanhoTelaW*2+"px");
$("#terra-grama2").css("top",$tamanhoTelaH-$terraGramaHn2+"px");
$("#terra-grama2").css("left",$tamanhoTelaW+"px");

$("#terra-grama3").css("height",$terraGramaHn3+"px");
$("#terra-grama3").css("width",$tamanhoTelaW+"px");
$("#terra-grama3").css("top",$tamanhoTelaH-$terraGramaHn3+"px");
$("#terra-grama3").css("left",$tamanhoTelaW*2+"px");

//ação avião
$("#aviao").css("left",$tamanhoTelaW*2.5+"px");
$("#aviao").css("bottom",$terraGramaHn3+"px");

$("#aviao-nivel1b").css("bottom",$terraGramaHn1+"px");

$("#base").css("bottom",$terraGramaHn1+"px");
$("#foguete").css("bottom",$terraGramaHn1+"px");

$("#aviao-p").css("left",$tamanhoTelaW*4+"px");
$("#aviao-p").css("top",$tamanhoTelaH-$terraGramaHn2+"px");
$("#aviao-p2").css("left",$tamanhoTelaW*5+"px");
$("#aviao-p2").css("top",$tamanhoTelaH-$terraGramaHn3+"px");

//ajusta o personagem ao piso
function comecaJuca() { $("#juca").css("bottom",$terraGramaHn1); }
comecaJuca();


function animeScroll(){
//pega a largura da div horizontal e coloca como altura da div page		
var $pisoTamanho = $('#camada-horizontal-1').css('width');
$('#page').css('height',$pisoTamanho);

//responsável pelo rolamento da camada horizontal		
var $posicaoScrollTopo = $(document).scrollTop();
$("#camada-horizontal-1.animar").css('left',"-"+$posicaoScrollTopo+'px');


//console.log($posicaoScrollTopo);
//retirar o px do valor pego

function apenasNumeros(string) 
{
	//var numsStr = string.replace(/[^0-9]/g,'');
	var numsStr = string.replace('px','');
	return parseInt(numsStr);
}


//detectar colisão nível

var $alvoNivel = $(".nivel");

var $posicaoJuca = $("#juca").offset().left;
var $posicaoJucat = $("#juca").offset().top;

var cont = 0;


//pegar obstaculos

$alvoNivel.each(function(index,value){
	var $total = $alvoNivel.length;

	var $posicaoElemento = $(this).offset().left;

	var $elemento = $alvoNivel[index];
	var $obstaculoAltura = $($elemento).css("height");

	if ($posicaoJuca > $posicaoElemento) {
		cont +=1;		
		var	$final = $total-cont; 	
	}

	$("#juca").stop().animate({bottom:$($alvoNivel[$final]).css("height")},30, function(){});

});

//avião

var $alvoAviao = $("#aviao");

$alvoAviao.each(function(){

	var $posicaoAviao = $(this).offset().left;

	if ($posicaoJuca > $posicaoAviao) {

		$("#juca").addClass("pilota-aviao");
		$(this).addClass("aviao-esconde");

/*		$("#juca")
*/	}else {
		$("#juca").removeClass("pilota-aviao");
		$(this).removeClass("aviao-esconde");

	}
});


var $alvoNivel1b = $(".nivel1-b");

$alvoNivel1b.each(function(){

	var $posicaoNivel1b = $(this).offset().left;

	if ($posicaoJuca+500 > $posicaoNivel1b) {
		$("#juca").stop().animate({bottom:$(this).css("height")},70, function(){});
	}
});

//aviao pousado nivel1b
var $alvoNivel1bAviao = $("#aviao-nivel1b");

$alvoNivel1bAviao.each(function(){
 var $posicaoAviaoPousado = $(this).offset().left;

 if ($posicaoJuca > $posicaoAviaoPousado+200) {

 	$("#juca").removeClass("pilota-aviao");
 	$(this).removeClass("aviao-esconde");
 }else {
 	$(this).addClass("aviao-esconde");
 }
});



//foguete pousado nivel1b
 var $posicaofoguete = $("#foguete").offset().left;
var $alvofoguete = $("#foguete");
/*var testea=10;
 if ($posicaoJuca >= $posicaofoguete) {

 	console.log("pj = "+$posicaoJuca + "pf ="+$posicaofoguete);
 	$("#juca").addClass("pilota-foguete");
 	$("#foguete").addClass("foguete-esconde");
 	$("#clock-disparar").addClass("start");
 	$("body").css("overflow","hidden");
 	$("#camada-horizontal-1").css("left",0);
 	setTimeout(function(){$("body").css("overflow","auto");},5000);
 	$("#camada-horizontal-1.animar").stop().animate({top:$posicaoScrollTopo+'px'},500, function(){
 		//$("body").stop().animate({backgroundPositionY:$posicaoScrollTopo+"px"},100, function(){});
 	});
}else {
 	$("#foguete").removeClass("foguete-esconde");
 	$("#juca").removeClass("pilota-foguete");
 	$("#clock-disparar").removeClass("start");

 	console.log("pj = "+$posicaoJuca + "pf ="+$posicaofoguete);

}
*/
$alvofoguete.each(function(){

 var $posicaofoguete = $(this).offset().left;
 var $posicaofoguetet = $(this).offset().top;
 console.log("foguete ="+$posicaofoguete);
 console.log("juca = "+$posicaoJuca);
 console.log("jucatop = "+$posicaoJucat);
 console.log("foguetetop = "+$posicaofoguetet);

 if(($posicaoJuca+200 > $posicaofoguete) && ($posicaofoguete > $posicaoJuca-200))
 {
 	console.log("colisão");
 	$("#juca").addClass("pilota-foguete");
 	$(this).addClass("foguete-esconde");
	$("#clock-disparar").addClass("start");
	$("#camada-horizontal-1").css("left",0);

	setTimeout(function(){
 	$("#camada-horizontal-1.animar").stop().animate({top:$posicaoScrollTopo+'px'},5000, function(){
 		$("body").css("overflow", "auto");

 	//	$("body").stop().animate({backgroundPositionY:$posicaoScrollTopo+"px"},100, function(){});
 	});
 		
 	},5000);
 }else{
 	$("#juca").removeClass("pilota-foguete");
 	$(this).removeClass("foguete-esconde");
 	$("#clock-disparar").removeClass("start");
 }


 if ($posicaofoguetet > $posicaoJucat) {
 	console.log("passou");
 }else {
 	console.log("não passou");
 }


});

//retorna somente o número do width


	$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');



}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx início função correr
//função que define se o personagem está andando para a direita ou esquerda
var countCorre = 0;

function correr(valor){
if(countCorre<=13){

	var $n = -200
	if (valor) {
		$("#juca").css("background-image", "url(img/juca4.png)");
		setInterval(function(){$("#juca").css("backgroundPositionX",""+$n*countCorre+"px")},200);
		
	}else {
		$("#juca").css("background-image", "url(img/juca4v.png)");
		$("#juca").css("backgroundPositionX",""+$n*countCorre+"px");
	}

	countCorre+=1;
if (countCorre==13) {
	countCorre=0;
}
	//return count;

}

}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função correr

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inicio funcao cronômetro

var $tempo = 6

function cronometro1() {
 setInterval(dispara,1000);	

}


function dispara(valor) {

	if($tempo >=0){
		$("#clock-disparar").html($tempo);
		
	}else {
		$("#clock-disparar").html("parou");

	}
		$tempo--;

}

/*function teste() {
	console.log("gledson");
	setInterval(function(){
	$("#clock-disparar").html($tempo+2);
$tempo--;
	},1000*0.1);
}*/

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função cronômetro


//pega a ultima posição do scroll
var $ultimaPosicaoScroll;
var $contar=0;

animeScroll();
$(document).scroll(function(){

	//pega posição do scroll
	var $posicaoScrollTopo = $(document).scrollTop();
	if ($posicaoScrollTopo > $ultimaPosicaoScroll) {
		//baixo scroll

		$contar++;
		correr(true);

	}else {
		//cima scroll
		$contar--;
		correr(false);
	}
	// guarda a ultima posição
	$ultimaPosicaoScroll = $posicaoScrollTopo;



	animeScroll();



});




});