<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once 'db.php';

// Auto-crear la tabla si no existe
$conn->query("CREATE TABLE IF NOT EXISTS match_overrides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    match_id VARCHAR(100) UNIQUE NOT NULL,
    home_score INT DEFAULT NULL,
    away_score INT DEFAULT NULL,
    is_live TINYINT(1) DEFAULT 0,
    minute VARCHAR(20) DEFAULT NULL,
    match_url VARCHAR(255) DEFAULT NULL
)");

// Por si ya tenías la tabla creada antes, forzamos agregar la columna (ignorará error si ya existe)
$conn->query("ALTER TABLE match_overrides ADD COLUMN match_url VARCHAR(255) DEFAULT NULL");
$conn->query("ALTER TABLE match_overrides ADD COLUMN status VARCHAR(20) DEFAULT 'NS'");
$conn->query("ALTER TABLE match_overrides ADD COLUMN home_team_name VARCHAR(100) DEFAULT NULL");
$conn->query("ALTER TABLE match_overrides ADD COLUMN away_team_name VARCHAR(100) DEFAULT NULL");

$res = $conn->query("SELECT * FROM match_overrides");
$data = [];
while($row = $res->fetch_assoc()){
    $data[$row['match_id']] = [
        'homeScore' => $row['home_score'],
        'awayScore' => $row['away_score'],
        'isLive' => (bool)$row['is_live'],
        'minute' => $row['minute'],
        'matchUrl' => $row['match_url'],
        'status' => $row['status'] !== 'NS' ? $row['status'] : ($row['is_live'] ? 'LIVE' : 'NS'),
        'homeTeamName' => $row['home_team_name'],
        'awayTeamName' => $row['away_team_name']
    ];
}
echo json_encode($data);
?>