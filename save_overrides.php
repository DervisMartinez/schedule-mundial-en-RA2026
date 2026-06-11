<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require 'db.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if ($data) {
    foreach ($data as $match_id => $override) {
        $home_score = isset($override['homeScore']) && $override['homeScore'] !== '' ? (int)$override['homeScore'] : 'NULL';
        $away_score = isset($override['awayScore']) && $override['awayScore'] !== '' ? (int)$override['awayScore'] : 'NULL';
        $minute = isset($override['minute']) ? $conn->real_escape_string($override['minute']) : '';
        $match_url = isset($override['matchUrl']) ? $conn->real_escape_string($override['matchUrl']) : '';
        $status = isset($override['status']) ? $conn->real_escape_string($override['status']) : 'NS';
        $home_team_name = isset($override['homeTeamName']) ? $conn->real_escape_string($override['homeTeamName']) : '';
        $away_team_name = isset($override['awayTeamName']) ? $conn->real_escape_string($override['awayTeamName']) : '';
        
        $is_live = ($status === 'LIVE') ? 1 : 0;
        
        $query = "INSERT INTO match_overrides (match_id, home_score, away_score, is_live, minute, match_url, status, home_team_name, away_team_name) 
                  VALUES ('$match_id', $home_score, $away_score, $is_live, '$minute', '$match_url', '$status', '$home_team_name', '$away_team_name')
                  ON DUPLICATE KEY UPDATE 
                  home_score = $home_score, away_score = $away_score, is_live = $is_live, minute = '$minute', match_url = '$match_url', status = '$status', home_team_name = '$home_team_name', away_team_name = '$away_team_name'";
        
        $conn->query($query);
    }
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'No JSON data received']);
}

echo json_encode(['success' => true]);
?>