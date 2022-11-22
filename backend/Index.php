<?php

namespace Niwee\ProjectManager;

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

use Bramus\Router\Router;
use Exception;
use Niwee\ProjectManager\Model\Category;
use Niwee\ProjectManager\Model\Local;
use Niwee\ProjectManager\Model\Member;
use Niwee\ProjectManager\Model\Specialty;
use Niwee\ProjectManager\Model\Theme;

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
//        $token = "";
//        foreach (getallheaders() as $name => $value) {
//            if ($name === 'Authorization'){
//                $token = $value;
//                break;
//            }
//        }

//        if($token === "123456789") {
            // Create Router instance
            $this->router = new Router();

            $whoops = new \Whoops\Run;
            $whoops->pushHandler(new \Whoops\Handler\JsonResponseHandler);
            $whoops->register();

            $this->setRoutes();

            $this->router->run();
//        }else{
//            $status = 2;
//            $data = ["Access" => "UnAuthorized"];
//            return $this->respond($status, $data);
//        }
    }

    public function setRoutes(): void
    {
        // Custom 404 Handler
        $this->router->set404(function () {
            header('HTTP/1.1 404 Not Found');
            echo '404, route not found!';
        });

        // GET => api/tableName[/id]
        $this->router->get('/api/(\w+)(/\d+)?', function ($table, $id) {

            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');

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
            } catch (Exception $e) {
                if ($e->getCode() === 2) {
                    $message = ["Unknown table" => $table];
                } else {
                    $message = $e->getMessage();
                }
                $data = [
                    "code" => $e->getCode(),
                    "message" => $message,
                ];
                $status = 2;
                return $this->respond($status, $data);
            }
        });

        // POST => api/tableName[/id]
        // Si id renseigné -> Update, sinon -> Insert
        $this->router->post('api/(\w+)(/\d+)?', function ($table, $id) {

            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');

            try {
                global $tables;
                ${$table} = $tables[$table];
                if (!$id) {
                    ${$table}->insert($_POST);
                } else {
                    ${$table}->update(htmlentities($id), $_POST);
                }
                die();
            } catch (Exception $e) {
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