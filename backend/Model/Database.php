<?php

namespace Niwee\ProjectManager\Model;

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
}
