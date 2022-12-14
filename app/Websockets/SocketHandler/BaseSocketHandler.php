<?php

namespace App\Websockets\SocketHandler;
use Ratchet\ConnectionInterface;
use Ratchet\WebSocket\MessageComponentInterface;

abstract class BaseSocketHandler implements MessageComponentInterface

{
    function onOpen(ConnectionInterface $conn)
    {
        broadcast(new \App\Events\NewMessage('Hello Websockets'));

        ddd('onOpend');
    }

    function onClose(ConnectionInterface $conn)
    {
        broadcast(new \App\Events\NewMessage('Hello Websockets'));

        ddd('closed');
    }

    function onError(ConnectionInterface $conn, \Exception $e)
    {
        broadcast(new \App\Events\NewMessage('Hello Websockets'));

        ddd($e);
        ddd('onError');
    }
}
