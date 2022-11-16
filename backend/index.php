<?php

namespace Niwee\ProjectManager;

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/Controller/bdd.php';
require_once __DIR__ . '/Model/Database.php';
require_once __DIR__ . '/Model/Specialty.php';

use Bramus\Router\Router;
use JetBrains\PhpStorm\NoReturn;

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
        // GET => api/specialty
        $pattern = '/api(/\w+)?(/\d+)?';
        $this->router->get($pattern, function ($table, $id) {

//          \d+ = One or more digits (0-9)
//          \w+ = One or more word characters (a-z 0-9 _)
//          [a-z0-9_-]+ = One or more word characters (a-z 0-9 _) and the dash (-)
//          .* = Any character (including /), zero or more
//          [^/]+ = Any character but /, one or more

            if ($table != 'specialty') {
                $status = 2;
                $data = ["Table de recherche inconnue"];
            } else {
                $specialty = new Specialty();
                if (!$id) {
//                    $tabRet = selectAll(htmlentities($table));
                    $tabRet = $specialty->selectAll();
                } else {
//                    $tabRet = selectById(htmlentities($table), htmlentities($id));
                    $tabRet = $specialty->selectById($id);
                }
//                $status = $tabRet[0];
//                $ret = $tabRet[1];
                $ret = $tabRet;

                $data = [$table => $ret];

                $status = 0;
            }
            return $this->respond($status, $data);
        });
    }

    /**
     * @param int $status : 0 = OK; 1 = Warning, 2 = Error
     * @param array $data
     * @return string
     */
    #[NoReturn] private function respond(int $status, array $data): string
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