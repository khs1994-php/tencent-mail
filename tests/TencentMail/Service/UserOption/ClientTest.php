<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\UserOption;

use TencentMail\Service\UserOption\Client;
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
        $this->instance = $this->getTest()->userOption;
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_get(): void
    {
        $this->result = $this->instance->get('khs1994@khs1994.com');
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     * @group dont-test
     */
    public function test_change(): void
    {
        $this->result = $this->instance->change(
            'khs1994@khs1994.com', [['type' => '1', 'value' => '1']]);
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
