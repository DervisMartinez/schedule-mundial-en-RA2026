<?php
require_once 'db.php';

$message = '';

// Manejar el formulario guardado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $match_id = strtolower(trim($_POST['match_id']));
    $home_score = $_POST['home_score'] !== '' ? (int)$_POST['home_score'] : 'NULL';
    $away_score = $_POST['away_score'] !== '' ? (int)$_POST['away_score'] : 'NULL';
    $is_live = isset($_POST['is_live']) ? 1 : 0;
    $minute = $conn->real_escape_string($_POST['minute']);
    $match_url = $conn->real_escape_string($_POST['match_url']);
    $status = $conn->real_escape_string($_POST['status']);
    $home_team_name = $conn->real_escape_string($_POST['home_team_name']);
    $away_team_name = $conn->real_escape_string($_POST['away_team_name']);
    $action = $_POST['action'];

    if ($action === 'delete') {
        $conn->query("DELETE FROM match_overrides WHERE match_id = '$match_id'");
        $message = "Partido reseteado (Datos del ICS restaurados).";
    } else {
        $query = "INSERT INTO match_overrides (match_id, home_score, away_score, is_live, minute, match_url, status, home_team_name, away_team_name) 
                  VALUES ('$match_id', $home_score, $away_score, $is_live, '$minute', '$match_url', '$status', '$home_team_name', '$away_team_name')
                  ON DUPLICATE KEY UPDATE 
                  home_score = $home_score, away_score = $away_score, is_live = $is_live, minute = '$minute', match_url = '$match_url', status = '$status', home_team_name = '$home_team_name', away_team_name = '$away_team_name'";
        if ($conn->query($query)) {
            $message = "Partido '$match_id' actualizado con éxito.";
        } else {
            $message = "Error: " . $conn->error;
        }
    }
}

// Obtener partidos sobrescritos
$res = $conn->query("SELECT * FROM match_overrides ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Radio América - Admin Mundial 2026</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8 font-sans">
    <div class="max-w-4xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow-md mb-6 border-t-4 border-red-700">
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Panel de Control En Vivo</h1>
            <p class="text-gray-600 mb-4">Actualiza marcadores y minutos de forma manual cuando la API se retrase.</p>
            
            <?php if($message): ?>
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    <?= $message ?>
                </div>
            <?php endif; ?>

            <form method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="hidden" name="action" value="save">
                
                <div class="col-span-1 md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700">Match ID (Ej: mexico-south-africa)</label>
                    <input type="text" name="match_id" required placeholder="paislocal-paisvisitante o 1a-3cefhi" class="mt-1 p-2 w-full border rounded">
                    <p class="text-xs text-gray-500 mt-1">Si el partido no está en la lista de abajo, solo escribe su ID aquí, llena los datos y dale a Guardar.</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Goles Local</label>
                    <input type="number" name="home_score" min="0" class="mt-1 p-2 w-full border rounded">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Goles Visitante</label>
                    <input type="number" name="away_score" min="0" class="mt-1 p-2 w-full border rounded">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Estado del Partido</label>
                    <select name="status" class="mt-1 p-2 w-full border rounded">
                        <option value="NS">Programado / Sin Empezar</option>
                        <option value="LIVE">En Vivo</option>
                        <option value="FT">Finalizado</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Minuto Actual (Ej: 45+2)</label>
                    <input type="text" name="minute" placeholder="Ej: 45+2" class="mt-1 p-2 w-full border rounded">
                </div>

                <div class="col-span-1 md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700">Asignar Equipo Local (Para 8vos, 4tos, etc.)</label>
                    <input type="text" name="home_team_name" placeholder="Ej: Mexico" class="mt-1 p-2 w-full border rounded">
                </div>

                <div class="col-span-1 md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700">Asignar Equipo Visitante (Para 8vos, 4tos, etc.)</label>
                    <input type="text" name="away_team_name" placeholder="Ej: Argentina" class="mt-1 p-2 w-full border rounded">
                    <p class="text-xs text-gray-500 mt-1">Escribe los nombres en inglés (Ej: Spain, Brazil, South Korea) para que carguen sus banderas correctamente.</p>
                </div>

                <div class="col-span-1 md:col-span-2 pt-2">
                    <label class="block text-sm font-medium text-gray-700">Enlace de Transmisión / Detalles</label>
                    <input type="url" name="match_url" placeholder="https://radioamerica.com/en-vivo" class="mt-1 p-2 w-full border rounded">
                </div>

                <div class="col-span-1 md:col-span-2 pt-4">
                    <button type="submit" class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-full">Guardar Cambios</button>
                </div>
            </form>
        </div>

        <!-- Lista de Partidos Modificados -->
        <h2 class="text-xl font-bold mb-4">Partidos con Intervención Manual</h2>
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
                <?php while($row = $res->fetch_assoc()): ?>
                    <li class="px-6 py-4 flex items-center justify-between">
                        <div>
                            <p class="text-sm font-medium text-gray-900"><?= htmlspecialchars($row['match_id']) ?></p>
                            <p class="text-sm text-gray-500">
                                Marcador: <?= $row['home_score'] ?? '-' ?> - <?= $row['away_score'] ?? '-' ?> 
                                | Minuto: <?= htmlspecialchars($row['minute']) ?>
                                <?php $dispStatus = $row['status'] ?? ($row['is_live'] ? 'LIVE' : 'NS'); ?>
                                <?= $dispStatus === 'LIVE' ? '<span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">En Vivo</span>' : '' ?>
                                <?= $dispStatus === 'FT' ? '<span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Finalizado</span>' : '' ?>
                                <br><span class="text-xs text-blue-600"><?= htmlspecialchars($row['match_url']) ?></span>
                                <?= $row['home_team_name'] || $row['away_team_name'] ? '<br><span class="text-xs text-purple-600">Equipos Asignados: '.htmlspecialchars($row['home_team_name']).' vs '.htmlspecialchars($row['away_team_name']).'</span>' : '' ?>
                            </p>
                        </div>
                        <form method="POST" onsubmit="return confirm('¿Restaurar a los valores automáticos?');">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="match_id" value="<?= htmlspecialchars($row['match_id']) ?>">
                            <button type="submit" class="text-sm text-red-600 hover:text-red-900">Restaurar Automático</button>
                        </form>
                    </li>
                <?php endwhile; ?>
                <?php if($res->num_rows === 0): ?>
                    <li class="px-6 py-4 text-gray-500 text-sm">No hay modificaciones manuales activas.</li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
</body>
</html>