<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\Group;

use TencentMail\Service\Group\Client;
use TencentMail\Service\Group\Group;
use TencentMail\Tests\TencentMailTestCase;

class ClientTest extends TencentMailTestCase
{
    /**
     * @var Client
     */
    public $instance;

    public $result;

    public function setUp(): void
    {
        $this->instance = $this->getTest()->group;
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_create(): void
    {
        $group = new Group();
        $group->name = 'test';
        $group->id = 'test@khs1994.com';
        $group->userlist = ['khs1994@khs1994.com'];

        $this->result = $this->instance->create($group);
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_get(): void
    {
        $this->result = $this->instance->get('test@khs1994.com');
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_update(): void
    {
        $group = new Group();
        $group->name = 'test';
        $group->id = 'test@khs1994.com';
        $group->department = [215737680756481930];

        $this->result = $this->instance->update($group);
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_delete(): void
    {
        $this->result = $this->instance->delete('test@khs1994.com');
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
