<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\Log;

use TencentMail\Exception\TencentMailException;
use TencentMail\Service\Log\Client;
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
        $this->instance = $this->getTest()->log;
    }

    /**
     * @throws TencentMailException
     */
    public function test_mailStatus(): void
    {
        $this->result = $this->instance->mailStatus(
            'khs1994.com', '2018-10-01', '2018-10-07');
    }

    /**
     * @throws TencentMailException
     */
    public function test_mail(): void
    {
        $this->result = $this->instance->mail('2018-10-01', '2018-10-07');
    }

    /**
     * @throws TencentMailException
     */
    public function test_login(): void
    {
        $this->result = $this->instance->login(
            'khs1994@khs1994.com', '2018-10-01', '2018-10-07');
    }

    /**
     * @throws TencentMailException
     */
    public function test_batchJob(): void
    {
        $this->result = $this->instance->batchJob('2018-10-01', '2018-10-07');
    }

    /**
     * @throws TencentMailException
     */
    public function test_operation(): void
    {
        $this->result = $this->instance->operation(
            1, '2018-10-01', '2018-10-07');
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
