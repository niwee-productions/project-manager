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
            $text = ["text" => "coucou depuis l'api"];

            echo $this->respond("Test", 0, $text);
        });

        $this->router->post('/api/test', function () {
            $text = ["text" => "Post depuis l'api"];

            echo $this->respond("Test", 0, $text);
        });

        $this->router->run();
    }

    private function respond(string $message, int $status, array $data): string
    {
        return json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}

$index = new Index();

