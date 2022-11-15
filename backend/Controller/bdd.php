<?php
// CONNECTER BDD
function connectBD($server, $user, $pass, $dbname): PDO
{
    $db = new PDO("mysql:host=$server;dbname=$dbname", $user, $pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function selectAll(string $table): array
{
    try {
        //Connexion DB
        $db = connectBD('DB', 'bruno', 'pswBruno', 'project_manager');

        $queryInput = "SELECT * FROM " . $table;
        $query = $db->prepare($queryInput);
        $query->execute();
        $status = 0;
        return [$status, $query->fetchAll(PDO::FETCH_ASSOC)];
    } catch (PDOException $e) {
        $code = $e->getCode();
        $message = $e->getMessage();
        $status = 2;
        return [$status, $code . " - " . $message];
    }
}

function selectById(string $table, string $id): array
{
    try {
        //Connexion DB
        $db = connectBD('DB', 'bruno', 'pswBruno', 'project_manager');

        $queryInput = "SELECT * FROM " . $table . " wHERE id = " . $id;
        $query = $db->prepare($queryInput);
        $query->execute();
        $status = 0;
        return [$status, $query->fetchAll(PDO::FETCH_ASSOC)];
    } catch (\Exception $e) {
        $code = $e->getCode();
        $message = $e->getMessage();
        $status = 2;
        return [$status, $code . " - " . $message];
    }
}