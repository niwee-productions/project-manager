<?php

namespace Niwee\ProjectManager;

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/Controller/bdd.php';
require_once __DIR__ . '/Model/Database.php';
require_once __DIR__ . '/Model/Specialty.php';
require_once __DIR__ . '/Model/Member.php';
require_once __DIR__ . '/Model/Category.php';
require_once __DIR__ . '/Model/Local.php';
require_once __DIR__ . '/Model/Theme.php';

use Bramus\Router\Router;
use JetBrains\PhpStorm\NoReturn;

$tables = [
    "specialty" => new Specialty(),
    "member" => new Member(),
    "category" => new Category(),
    "theme" => new Theme(),
    "local" => new Local(),
];

class Index
{
    /**
     * @var Router
     */
    private Router $router;

    public function __construct()
    {
        // Create Router instance
        $this->router = new Router();

        $whoops = new \Whoops\Run;
        $whoops->pushHandler(new \Whoops\Handler\JsonResponseHandler);
        $whoops->register();

        $this->setRoutes();

        $this->router->run();
    }

    public function setRoutes(): void
    {
        // GET => api/tableName[/id]
        $this->router->get('/api/(\w+)(/\d+)?', function ($table, $id) {

//          \d+ = One or more digits (0-9)
//          \w+ = One or more word characters (a-z 0-9 _)
//          [a-z0-9_-]+ = One or more word characters (a-z 0-9 _) and the dash (-)
//          .* = Any character (including /), zero or more
//          [^/]+ = Any character but /, one or more
            try {
                global $tables;
                ${$table} = $tables[$table];
                if (!$id) {
                    $ret = ${$table}->selectAll();
                } else {
                    $ret = ${$table}->selectById(htmlentities($id));
                }

                if (empty($ret)) {
                    $status = 1;
                    $ret = "Empty data";
                } else {
                    $status = 0;
                }
                $data = [$table => $ret];

                return $this->respond($status, $data);
            } catch (\Exception $e){
                $data = [
                    "code" => $e->getCode(),
                    "message" => $e->getMessage()
                ];
                $status = 2;
                return $this->respond($status, $data);
            }
        });

        // POST => api/tableName[/id]
        // Si id renseigné -> Update, sinon -> Insert
        $this->router->post('api/(\w+)(/\d+)?', function ($table, $id) {
            try {
                global $tables;
                ${$table} = $tables[$table];
                if (!$id) {
                    ${$table}->insert($_POST);
                } else {
                    ${$table}->update(htmlentities($id), $_POST);
                }
                die();
            } catch (\Exception $e) {
                $data = [
                    "code" => $e->getCode(),
                    "message" => $e->getMessage()
                ];
                $status = 2;
                return $this->respond($status, $data);
            }
        });

        // PUT => post/specialty/id/name/short_name/description
//        $this->router->put('api/specialty/(\d+)(/\w+)(/\w+)(/\w+)', function ($id, $name, $short_name, $description) {
//        $this->router->put('api/specialty/(\d+)', function ($id) {
//            // Fake $_PUT
//            $_PUT = array();
//            parse_str(file_get_contents('php://input'), $_PUT);
//
//            var_dump(' ------ $_PUT  ------ ');
//            var_dump($_PUT);
//            var_dump(' ------ FIN -- $_PUT ------ ');
//
//            $name = $_PUT['name'] ?? "";
//            $short_name = $_PUT['short_name'] ?? "";
//            $description = $_PUT['description'] ?? "";
//
//            $specialty = new Specialty();
//            $specialty->update($id, $name, $short_name, htmlentities($description));
//        });
    }

    /**
     * @param int $status : 0 = OK; 1 = Warning, 2 = Error
     * @param array $data
     * @return string
     */
    private function respond(int $status, array $data): string
    {
        switch ($status) {
            default:
            case 0:
                $message = 'OK';
                break;
            case 1:
                $message = 'Warning';
                break;
            case 2:
                $message = 'Error';
                break;
        }

        $data = [
            "Status" => $status,
            "message" => $message,
            "data" => $data,
        ];

        die (json_encode($data));
    }
}

$index = new Index();