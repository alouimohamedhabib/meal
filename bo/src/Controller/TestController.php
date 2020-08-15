<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class TestController {
    public function index(){
        return new Response("Yo");
    }
}