<!DOCTYPE html>
<html>
<head>
	<title>Referencial Nacional de Procedimentos Fisioterapêuticos - RNPF</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/rnpf.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
	<div id="geral" class="col-col row">
		<div id="menu" class="col-col row">
			<nav>
				<ul class="lista-menu">
					<li>nome 1</li>
					<li>nome 2</li>
				</ul>
			</nav>
		</div>
		<?php include_once ("section-apresentacao.php")  ?>
		<?php include_once ("section-tempo.php")  ?>
		<?php include_once ("section-tabelas.php")  ?>
		<?php include_once ("section-sistema.php")  ?>

		<section>
			<div id="rodape" class="col-col row">
				<div><a href="#apresentacao" class="setaTopo" title="Para o topo">&circ;</a></div>
				<a href="https://www.coffito.gov.br" title="Conselho Federal de Fisioterapia e Terapia Ocupacional" target="_blank"><img src="img/sistemacoffito.png"></a>
			</div>
		</section>
		<script type="text/javascript" src="js/rnpf.js"></script>
	</div>
</body>
</html>