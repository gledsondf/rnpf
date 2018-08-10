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




/*
	var $especial = $("#juca").css("bottom");

	console.log($especial);*/
function animeScroll(){
//pega a largura da div horizontal e coloca como altura da div page		
		var $pisoTamanho = $('#camada-horizontal-1').css('width');
		$('#page').css('height',$pisoTamanho);

//responsável pelo rolamento da camada horizontal		
		var $posicaoScrollTopo = $(document).scrollTop();
		$("#camada-horizontal-1").css('left',"-"+$posicaoScrollTopo+'px');

//retirar o px do valor pego

		function apenasNumeros(string) 
		{
			//var numsStr = string.replace(/[^0-9]/g,'');
			var numsStr = string.replace('px','');
			return parseInt(numsStr);
		}


//detectar colisão nível

		var $alvoNivel = $(".nivel");
/*		var $alvoNivel2 = $(".nivel2");
*/
		var $posicaoJuca = $("#juca").offset().left+250;


		var cont=0;

		$alvoNivel.each(function(index,value){

			var item2 = $alvoNivel[0];
			var item1 = $alvoNivel[1];
			var item0 = $alvoNivel[2];

			var item00 = $(item0).css("height");
			var item11 = $(item1).css("height");
			var item22 = $(item2).css("height");
			//console.log(index+" : "+ $(this).attr("id"));
			var $posicaoItem = $(this).offset().left;
			var $posicaoBottom = $(this).css("height");
			var $posicaoBottomJucaInicial = $terraGramaHn1+"px";
			var $posicaoBottomJ= $("#juca").css("bottom");
			if ($posicaoJuca > $posicaoItem) {

				cont +=1;
			}else{

/*				cont =0;
*/			}

console.log(cont);

				if( cont==1){
				console.log(cont);
					$("#juca").stop().animate({bottom:item00},100, function(){});
				}if(cont==2) {

					$("#juca").stop().animate({bottom:item11},100, function(){});

				}if(cont==3) {

					$("#juca").stop().animate({bottom:item22},100, function(){});

				}			
		});
			//return console.log("parou");
/*
		$alvoNivel2.each(function(){
			
			var $posicaoItem = $(this).offset().left;

			var $posicaoBottom = $(this).css("height");

			if ($posicaoJuca < $posicaoItem) {


			}else {

				$("#juca").stop().animate({bottom:$posicaoBottom*1.6},200, function(){});
			}
		});*/




	//	var $alvo = $(".nivel-1");

	//	var $posicaoJuca = $("#juca").offset().left+250;

	//	var $posicaoalvo = $alvo.offset().left;

		//console.log("juca = "+$posicaoJuca+" alvo = "+$posicaoalvo);

/*		var $tamanhoPiso=apenasNumeros($pisoTamanho);
*/		

	//	if ($posicaoJuca < $posicaoalvo) {

	//		$("#juca").stop().animate({bottom:$especial},200, function(){});

	//	}else {

	//		$("#juca").stop().animate({bottom:"toggle"},100, function(){});
		
	//	}

//		

		//retorna somente o número do width


/*		$("#nuvem").css('left',"-"+($posicaoScrollTopo*1/10)+'px');
*/
		


		


}

animeScroll();

$(document).scroll(function(){
	animeScroll();

});



});