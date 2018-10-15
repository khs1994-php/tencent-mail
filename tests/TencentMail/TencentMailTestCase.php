<?php

declare(strict_types=1);

namespace TencentMail\Tests;

use Doctrine\Common\Cache\FilesystemCache;
use Dotenv\Dotenv;
use PHPUnit\Framework\TestCase;
use TencentMail\TencentMail;

class TencentMailTestCase extends TestCase
{
    private static $test;

    public static function getTest()
    {
        if (file_exists($envfile = __DIR__.'/../../.env.testing')) {
            $dotenv = new Dotenv(__DIR__.'/../../', '.env.testing');
            $dotenv->load();
        }

        if (!(self::$test instanceof TencentMail)) {
            self::$test = new TencentMail([
                'corpId' => getenv('TENCENT_MAIL_CORP_ID'),
                'departmentSecret' => getenv('TENCENT_MAIL_DEPARTMENT_SECRET'),
                'loginSecret' => getenv('TENCENT_MAIL_LOGIN_SECRET'),
                'mailSecret' => getenv('TENCENT_MAIL_MAIL_SECRET'),
                'userOptionSecret' => getenv('TENCENT_MAIL_USEROPTION_SECRET'),
                'logSecret' => getenv('TENCENT_MAIL_LOG_SECRET'),
                'cache' => (new FilesystemCache(sys_get_temp_dir())),
            ]);
        }

        return self::$test;
    }
}
