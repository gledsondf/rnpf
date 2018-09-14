$(document).ready(function(){
	




//pega a largura e altura da página


var $tamanhoTelaH = $(window).height()+200;
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


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inicio anime scroll

function animeScroll(){
	//pega a largura da div horizontal e coloca como altura da div page		
	var $pisoTamanho = $('#camada-horizontal-1').css('width');
	$('#page').css('height',$pisoTamanho);

	//responsável pelo rolamento da camada horizontal		
	var $posicaoScrollTopo = $(document).scrollTop();
	$("#camada-horizontal-1.animar").css('left',"-"+$posicaoScrollTopo+'px');


	//posicao do personagem em relação a tela
	var $posicaoJuca = $("#juca").offset().left;


	//detectar colisão nível
	//============================================================== funcao pegar obstaculos nível
	var $alvoNivel = $(".nivel");
	var $contaNivel = 0;

	$alvoNivel.each(function(index,value){
		var $total = $alvoNivel.length;

		var $posicaoElemento = $(this).offset().left;

		var $elemento = $alvoNivel[index];
		var $obstaculoAltura = $($elemento).css("height");

		if ($posicaoJuca > $posicaoElemento-200) {
			$contaNivel +=1;		
			var	$final = $total-$contaNivel; 	
		}

		$("#juca").stop().animate({bottom:$($alvoNivel[$final]).css("height")},30, function(){});

	});	

	//nivel baixo de piso
	var $alvoNivel1b = $(".nivel1-b");

	$alvoNivel1b.each(function(){
		var $posicaoNivel1b = $(this).offset().left;

		if ($posicaoJuca+500 > $posicaoNivel1b) {
			$("#juca").stop().animate({bottom:$(this).css("height")},70, function(){});
		}
	});

	//============================================================== fim funcao pegar obstaculos nível
	//============================================================== funcao pegar obstaculos avião
	
	var $alvoAviao = $("#aviao");

	$alvoAviao.each(function(){
		var $posicaoAviao = $(this).offset().left;

		if ($posicaoJuca > $posicaoAviao) {
			$("#juca").addClass("pilota-aviao");
			$(this).addClass("esconde-visibilidade");
		}else {
			$("#juca").removeClass("pilota-aviao");
			$(this).removeClass("esconde-visibilidade");
		}
	});

	//aviao pousado nivel1b
	var $alvoNivel1bAviao = $("#aviao-nivel1b");

	$alvoNivel1bAviao.each(function(){
		var $posicaoAviaoPousado = $(this).offset().left;

		if ($posicaoJuca > $posicaoAviaoPousado+200) {
			$("#juca").removeClass("pilota-aviao");
			$(this).removeClass("esconde-visibilidade");
		}else {
			$(this).addClass("esconde-visibilidade");
		}
	});
function apenasNumeros(string) 
{
	//var numsStr = string.replace(/[^0-9]/g,'');
	var numsStr = string.replace('px','');
	return parseInt(numsStr);
}
	//============================================================== fim funcao pegar obstaculos avião
	//============================================================== funcao pegar obstaculos foguete
	 var $alvofoguete = $("#foguete");
	 $alvofoguete.each(function(){
		 var $posicaofoguete = $(this).offset().left;
		 var $posicaoPisoFinal =  $("#camada-horizontal-1").css("left");
		 var $posScroll = $(document).scrollTop();
		 console.log($posicaoJuca +"== foguete== "+ $posicaofoguete);
		  if(($posicaoJuca > $posicaofoguete) && ($posicaofoguete > $posicaoJuca-190)){
		 
			  $("#controle-lancamento").removeClass("esconde-visibilidade");
              $ultimaPosicaoPiso = $posicaoPisoFinal;
              $finalScroll = $posScroll;
		  }else {
			 $("#controle-lancamento").addClass("esconde-visibilidade");
		  }
			  if ($posicaoJuca > $posicaofoguete + 200) {
  	  			 $("#controle-lancamento").addClass("esconde-visibilidade");
			  	  $npp = apenasNumeros($ultimaPosicaoPiso);
				 $("#camada-horizontal-1").css("left",$npp);
			     $(document).scrollTop($finalScroll);
			 }


	 });
	//============================================================== fim funcao pegar obstaculos foguete
}

animeScroll();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim anime scroll

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx início função correr

//função que define se o personagem está andando para a direita ou esquerda
var $countCorre = 0;

function correr(valor){
	//valor será verdadeiro ou falso, se scroll direcão baixo verdadeiro
	
	if($countCorre<=13){
		//tamanho dos frames
		var $n = -200
		if (valor) {
			$("#juca").css("background-image", "url(img/juca3.png)");
			setInterval(function(){$("#juca").css("backgroundPositionX",""+$n*$countCorre+"px")},200);

		}else {
			$("#juca").css("background-image", "url(img/juca3v.png)");
			$("#juca").css("backgroundPositionX",""+$n*$countCorre+"px");
		}

		$countCorre+=1;

		if ($countCorre==13) {
			$countCorre=0;
		}
	}
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função correr
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inicio função decolar

$("#controle-lancamento ul").on("click", "li", function(){
	var classe = $(this).attr("class");
	decolar(classe);
});
var $animaDecola;
function decolar(valor){
	 $valor = parseInt(valor);
	if ($valor) {
		$("#foguete").addClass("esconde-visibilidade");
		$("#juca").addClass("pilota-foguete");
		$("#clock-disparar").addClass("start");
		$("body").css("overflow", "hidden");
		$("body").css("-webkit-overflow-scrolling","touch");
		//$("html,body").css("height", "100%");
		 //document.body.addEventListener("touchmove", freezeVp, false);
	 $animaDecola =	setTimeout(function(){
 			$("#camada-horizontal-1.animar").stop().animate({top:'2000px'},2000,function(){
 				//$("body").css("overflow", "auto");
 			});
			$("body").stop().animate({backgroundPositionY:"1500px"},5000, function(){
				$("#juca").html("<div class='botaofoguete'>gledson</div>");
			});
		},5000);

	}else {
		$("#foguete").removeClass("esconde-visibilidade");
		$("#clock-disparar").removeClass("start");
	 	$("#juca").removeClass("pilota-foguete");
		$("body").css("overflow", "auto");

	 	clearTimeout($animaDecola);
	}
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função decolar
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inicio função botaofoguete

$("#juca").on("click","div.botaofoguete",function(){
	 
	$("body").stop().animate({backgroundPositionY:"3000px"},5000, function(){});

});


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função botaofoguete
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inicio função decolar
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim função decolar


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx pegar posição do scroll

var $ultimaPosicaoScroll;
var $contar=0;
var $ultimaPosicaoPiso;
var $finalScroll;


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
	// a cada rolagem de página, chamo a função
	animeScroll();
});

	
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fim pegar posição do scroll

});