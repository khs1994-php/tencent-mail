<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\Login;

use TencentMail\Service\Login\Client;
use TencentMail\Tests\TencentMailTestCase;

class ClientTest extends TencentMailTestCase
{
    /**
     * @var Client
     */
    protected $instance;

    protected $result;

    public function setUp(): void
    {
        $this->instance = $this->getTest()->login;
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_getLoginUrl(): void
    {
        $this->result = $this->instance->getLoginUrl('khs1994@khs1994.com');
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
