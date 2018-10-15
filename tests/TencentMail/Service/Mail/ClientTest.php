<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\Mail;

use TencentMail\Service\Mail\Client;
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
        $this->instance = $this->getTest()->mail;
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_newCount(): void
    {
        $this->result = $this->instance->newCount(
            'khs1994@khs1994.com', '2018-10-01', '2018-10-07');
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
