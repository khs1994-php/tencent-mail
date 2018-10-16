<?php

declare(strict_types=1);

namespace TencentMail\Support;

class Facade extends \Illuminate\Support\Facades\Facade
{
    protected static function getFacadeAccessor()
    {
        return 'tencent-mail';
    }
}
