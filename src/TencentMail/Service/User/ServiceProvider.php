<?php

declare(strict_types=1);

namespace TencentMail\Service\User;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['user'] = function ($app) {
            return new Client($app);
        };
    }
}
