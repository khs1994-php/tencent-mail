<?php

declare(strict_types=1);

namespace TencentMail\Service\Group;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['group'] = function ($app) {
            return new Client($app);
        };
    }
}
