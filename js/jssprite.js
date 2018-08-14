$(document).ready(function(){

//pega a largura e altura da página

var $tamanhoTelaH = $(window).height();
var $tamanhoTelaW = $(window).width();


//deixa a tela principal do tamanho do view
$(".tela-h").css("height",$tamanhoTelaH+"px");


//responsável pelo posicionamento do terreno nível 1
var $terraGramaHn1 = $tamanhoTelaH*0.1;
var $terraGramaHn2 = $tamanhoTelaH*0.3;
var $terraGramaHn3 = $tamanhoTelaH*0.5;

$(".terra-grama1").css("height",$terraGramaHn1+"px");
$(".terra-grama1").css("width",$tamanhoTelaW+"px");
$(".terra-grama1").css("top",$tamanhoTelaH-$terraGramaHn1+"px");

$(".terra-grama2").css("height",$terraGramaHn2+"px");
$(".terra-grama2").css("width",$tamanhoTelaW*2+"px");
$(".terra-grama2").css("top",$tamanhoTelaH-$terraGramaHn2+"px");
$(".terra-grama2").css("left",$tamanhoTelaW+"px");

$(".terra-grama3").css("height",$terraGramaHn3+"px");
$(".terra-grama3").css("width",$tamanhoTelaW+"px");
$(".terra-grama3").css("top",$tamanhoTelaH-$terraGramaHn3+"px");
$(".terra-grama3").css("left",$tamanhoTelaW*2+"px");




//ajusta o personagem ao piso

$("#juca").css("bottom",$terraGramaHn1);
$("#juca").addClass("parar");


function animeScroll(){
//pega a largura da div horizontal e coloca como altura da div page		
var $pisoTamanho = $('#camada-horizontal-1').css('width');
$('#page').css('height',$pisoTamanho);

//responsável pelo rolamento da camada horizontal		
var $posicaoScrollTopo = $(document).scrollTop();
$("#camada-horizontal-1").css('left',"-"+$posicaoScrollTopo+'px');

console.log($posicaoScrollTopo);
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

//retorna somente o número do width


/*		$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');
*/


}

animeScroll();
$(document).scroll(function(){
	animeScroll();

});



//console.log($teste);

});