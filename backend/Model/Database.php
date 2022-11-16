<?php

namespace Niwee\ProjectManager;

require './vendor/autoload.php';

use Medoo\Medoo;

class Database extends Medoo
{
    public function __construct()
    {
//        var_dump($_ENV);
        return parent::__construct([
            'type' => 'mariadb',
            'host' => $_ENV['MYSQL_HOST'],
            'database' => $_ENV['MYSQL_DATABASE'],
            'username' => $_ENV['MYSQL_USER'],
            'password' => $_ENV['MYSQL_PASSWORD']
        ]);

    }
    // , array $columns, array $where
    public function selectAll(string $table, array $columns): array
    {
        return $this->select($table, $columns, []);
    }

    public function selectById(string $table, int $id, array $columns): array
    {
        return $this->select($table, $columns, [
            "id[=]" => $id,
        ]);
    }
}
