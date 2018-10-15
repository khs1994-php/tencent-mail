<?php

declare(strict_types=1);

namespace TencentMail\Service\Login;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['login'] = function ($app) {
            return new Client($app);
        };
    }
}
