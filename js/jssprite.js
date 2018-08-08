$(document).ready(function(){

//pega a largura e altura da página

	var $tamanhoTelaH = $(window).height();
	var $tamanhoTelaW = $(window).width();

/*	alert("altura = "+$tamanhoTelaH+" / largura = "+ $tamanhoTelaW);*/

//deixa a tela principal do tamanho do view
	$(".tela-h").css("height",$tamanhoTelaH+"px");


//responsável pelo posicionamento do terreno nível 1
	var $terraGramaHn1 = $tamanhoTelaH*10/100;

	var $terraGramaHn2 = $tamanhoTelaH*20/100;
	var $terraGramaWn2 = $tamanhoTelaW;

	var $terraGramaHn3 = $tamanhoTelaH*20/100;
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

	$("#juca").css("bottom",$terraGramaHn1-12+"px");

	var $especial = $("#juca").css("bottom");

	console.log($especial);
function animeScroll(){

		function apenasNumeros(string) 
		{
			//var numsStr = string.replace(/[^0-9]/g,'');
			var numsStr = string.replace('px','');
			return parseInt(numsStr);
			//return numsStr;
		}

			var $jucapiso = apenasNumeros( $("#juca").css("bottom"));

			var $alvoH = apenasNumeros($(".nivel-1").css("height"));

			var $total = $jucapiso+$alvoH;
						


			


		var $alvo = $(".nivel-1");

		var $posicaoJuca = $("#juca").offset().left+250;

		var $posicaoalvo = $alvo.offset().left;

		//console.log("juca = "+$posicaoJuca+" alvo = "+$posicaoalvo);

/*		var $tamanhoPiso=apenasNumeros($pisoTamanho);
*/		var $posicaoScrollTopo = $(document).scrollTop();

		if ($posicaoJuca < $posicaoalvo) {

			$("#juca").stop().animate({bottom:$especial},200, function(){});

		}else {

			$("#juca").stop().animate({bottom:"toggle"},100, function(){});
		
		}

		var $pisoTamanho = $('#camada-horizontal-1').css('width');

		$('#page').css('height',$pisoTamanho);

		//retorna somente o número do width


		$("#camada-horizontal-1").css('left',"-"+$posicaoScrollTopo+'px');
/*		$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');
*/
		


		


}

animeScroll();

$(document).scroll(function(){
	animeScroll();

});



});