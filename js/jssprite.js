$(document).ready(function(){


	var $tamanhoTelaH = $(window).height();
	var $tamanhoTelaW = $(window).width();

/*	alert("altura = "+$tamanhoTelaH+" / largura = "+ $tamanhoTelaW);*/

	$(".tela-h").css("height",$tamanhoTelaH+"px");

	var $terraGramaHn1 = $tamanhoTelaH*10/100;

	var $terraGramaHn2 = $tamanhoTelaH*15/100;
	var $terraGramaWn2 = $tamanhoTelaW;

	var $terraGramaHn3 = $tamanhoTelaH*25/100;
	var $terraGramaWn3 = $tamanhoTelaW*150/100;

	$(".terra-grama1").css("height",$terraGramaHn1+"px");
	$(".terra-grama1").css("top",$tamanhoTelaH-$terraGramaHn1+"px");
	$(".terra-grama1 .grama").css("width",$tamanhoTelaW+"px");

	$(".terra-grama2").css("height",$terraGramaHn2+5+"px");
	$(".terra-grama2").css("top",$tamanhoTelaH-$terraGramaHn1-$terraGramaHn2+"px");
	$(".terra-grama2").css("left",$tamanhoTelaW+"px");
	$(".terra-grama2 .grama").css("width",$terraGramaWn3+"px");
	$(".terra-grama2").css("width",$tamanhoTelaW*3.5+"px");

	$(".terra-grama3").css("height",$terraGramaHn3+5+"px");
	$(".terra-grama3").css("top",$tamanhoTelaH-$terraGramaHn1-$terraGramaHn2-$terraGramaHn3+"px");
	$(".terra-grama3").css("left",$tamanhoTelaW+$terraGramaWn3+"px");
	$(".terra-grama3").css("width",$tamanhoTelaW*2+"px");


function animeScroll(){

		var $alvo = $('.animar');

		var $pisoTamanho = $('#camada-horizontal-1').css('width');

		$('#page').css('height',$pisoTamanho);

		//retorna somente o número do width
		function apenasNumeros(string) 
		{
			var numsStr = string.replace(/[^0-9]/g,'');
			return parseInt(numsStr);
		}

		var $tamanhoPiso=apenasNumeros($pisoTamanho);
		var $posicaoScrollTopo = $(document).scrollTop();

		$("#camada-horizontal-1").css('left',"-"+$posicaoScrollTopo+'px');
/*		$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');
*/
		console.log($posicaoScrollTopo);

		if ($posicaoScrollTopo > 2230) {


			$("#robby").css('bottom','504px');
		}if ($posicaoScrollTopo > 2280) {
						$("#robby").css('bottom','304px');


		}else {
			$("#robby").css('bottom','204px');
		}


}

animeScroll();

$(document).scroll(function(){
	animeScroll();

});



});