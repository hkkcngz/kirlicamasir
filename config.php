<?php
// veritabanına bağlanalım
	$servername = "localhost";
	$username   = "YOUR_DB_USERNAME";
	$password   = "YOUR_DB_USERPASS";
	$dbname     = "YOUR_DBNAME";

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
