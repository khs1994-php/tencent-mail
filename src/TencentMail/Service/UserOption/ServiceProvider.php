<?php

declare(strict_types=1);

namespace TencentMail\Service\UserOption;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['userOption'] = function ($app) {
            return new Client($app);
        };
    }
}
