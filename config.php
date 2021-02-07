<?php
// veritabanına bağlanalım
	$servername = "localhost";
	$username   = "hakkicen_kirli";
	$password   = "102030aaA.";
	$dbname     = "hakkicen_camasir";

	$db = new mysqli($servername, $username, $password, $dbname);
	if ($db->connect_error) {
		die("Başaramadık abi: " . $db->connect_error);
	}

	// Türkçe Dil Desteği
	date_default_timezone_set("Europe/Istanbul");
	setlocale(LC_ALL, 'tr_TR.UTF-8');
	$db->query("SET NAMES 'utf8'");
	$db->set_charset("utf8");	
	

	$sql = "SELECT * FROM kirliler";
    $result = $db->query($sql);
?>