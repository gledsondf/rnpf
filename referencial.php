<!DOCTYPE html>
<html>
<head>
	<title>Referencial Nacional - RNPF e RNHTO</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="img/favicon.png">
	<link rel="stylesheet" type="text/css" href="css/referencial.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
	<div id="geral" class="col-col row">
		<div id="menu" class="col-col row">
			<nav>
				<ul class="lista-menu">
					<li><a href="#tabelas-fisio" title="Referencial Nacional RNPF-2018">RNPF-2018</a></li>
					<li><a href="#tabelas-to" title="Referencial Nacional RNHTO">RNHTO-2018</a></li>
					<li><a href="index.html" title="Voltar para o início da jornada">Jornada</a></li>
				</ul>
			</nav>
		</div>
		<?php include_once ("section-apresentacao.php") ?>
		<?php include_once ("section-tempo.php") ?>
		<?php include_once ("section-tabelas-fisio.php") ?>
		<?php include_once ("section-tabelas-to.php") ?>
		<?php include_once ("section-sistema.php") ?>

		<section>
			<div id="rodape" class="col-col row">
				<div><a href="#apresentacao" class="setaTopo" title="Para o topo">&circ;</a></div>
				<a href="https://www.coffito.gov.br" title="Conselho Federal de Fisioterapia e Terapia Ocupacional" target="_blank"><img src="img/sistemacoffito.png"></a>
			</div>
		</section>
		<script type="text/javascript" src="js/referencial.js"></script>
	</div>
</body>
</html>