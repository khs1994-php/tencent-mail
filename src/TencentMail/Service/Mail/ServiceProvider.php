<?php

declare(strict_types=1);

namespace TencentMail\Service\Mail;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple): void
    {
        $pimple['mail'] = function ($app) {
            return new Client($app);
        };
    }
}
