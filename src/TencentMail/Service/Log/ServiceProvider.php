<?php

declare(strict_types=1);

namespace TencentMail\Service\Log;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['log'] = function ($app) {
            return new Client($app);
        };
    }
}
