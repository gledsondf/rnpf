$(document).ready(function(){

if (
  document.fullscreenElement || /* Standard syntax */
  document.webkitFullscreenElement || /* Chrome, Safari and Opera syntax */
  document.mozFullScreenElement ||/* Firefox syntax */
  document.msFullscreenElement /* IE/Edge syntax */
) {
console.log("gledson");

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

comecaJuca();
//ajusta o personagem ao piso
function comecaJuca() {
$("#juca").css("bottom",$terraGramaHn1);


}


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

var $posicaoJuca = $("#juca").offset().left+250;

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
var $alvofoguete = $("#foguete");

$alvofoguete.each(function(){

 var $posicaofoguete = $(this).offset().left;

 if ($posicaoJuca > $posicaofoguete+250) {

 	$("#juca").addClass("pilota-foguete");
 	$(this).addClass("foguete-esconde");
	$("#escuro").addClass("escurecer");
 	$("#camada-horizontal-1.animar").stop().animate({top:$posicaoScrollTopo+'px'},500, function(){
 		//$("body").stop().animate({backgroundPositionY:$posicaoScrollTopo+"px"},100, function(){});
 	});
 	//$("body").css("backgroundPositionY",+$contar*300+"px");
 	$("body").stop().animate({backgroundPositionY:$contar*3000+"px"},10,function(){});
	$("#camada-horizontal-1").css("left",0);

 }else {
 	$(this).removeClass("foguete-esconde");
	 //	$("body").css("backgroundPositionY",+$posicaoScrollTopo*1.5+"px");

	$("#camada-horizontal-1.animar").stop().animate({top:0+'px'},100, function(){
			$("#juca").removeClass("pilota-foguete");
	 		$("#escuro").removeClass("escurecer");

	});

 }


});

//retorna somente o número do width


	$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');



}

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

		console.log($contar);
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