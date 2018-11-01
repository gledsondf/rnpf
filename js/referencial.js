$(document).ready(function(){
		var tamanhoTela = $(window).height();
	$(".tamanho").css("height",tamanhoTela+"px");


$(".linkTabela").on("click",function(){
	
	var $valor = $(this).attr("data");

	console.log($valor);
	if ($valor=="fisio") {
		$('div.engloba-tabela-fisio').addClass("show").toggle();
	}else if($valor == "to"){
		$('div.engloba-tabela-to').addClass("show").toggle();
	}
});


//rolagem
// Add smooth scrolling to all links in navbar + footer link
$("a[href='#apresentacao'],a[href='#tabelas-fisio'],a[href='#tabelas-to'],a[href='#sistema']").on('click', function(event) {


// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;
// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({
  scrollTop: $(hash).offset().top
}, 900, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
window.location.hash = hash;
});
});







});