<?php
// Archivo de conexión a la Base de Datos
$host = 'localhost';
$db = 'schedule2026';
$user = 'schedule2026';
$pass = 'erezmKw8SjLTzr6Z';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8mb4");
?>