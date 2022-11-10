<?php

namespace Niwee\ProjectManager;

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

use Bramus\Router\Router;

class Index
{
    /**
     * @var Router
     */
    private $router;

    public function __construct()
    {
        // Create Router instance
        $this->router = new Router();

        $this->router->get('/api/test', function () {
//            echo "Coucou";
            $text = ["text" => "coucou depuis l'api"];
            echo json_encode($text, JSON_UNESCAPED_UNICODE);
        });

        $this->router->run();
    }

}

$index = new Index();
