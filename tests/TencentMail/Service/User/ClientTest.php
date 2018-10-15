<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\User;

use TencentMail\Exception\TencentMailException;
use TencentMail\Service\User\Client;
use TencentMail\Service\User\User;
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
        $this->instance = $this->getTest()->user;
    }

    /**
     * @throws TencentMailException
     */
    public function test_create(): void
    {
        $user = new User();

        $user->name = 'test';
        $user->id = 'test@khs1994.com';
        $user->department = [215737680756481930];
        $user->password = 'TencentMailTest';

        $this->result = $this->instance->create($user);
    }

    /**
     * @throws TencentMailException
     */
    public function test_update(): void
    {
        $user = new User();

        $user->name = 'test';
        $user->id = 'test@khs1994.com';
        $user->position = 'test';
        $user->mobile = '12345678945';
        $user->tel = '123456';
        $user->gender = 2;
        $user->extid = 1;
        $user->slaves = ['test3@khs1994.com'];

        $this->result = $this->instance->update($user);
    }

    /**
     * @throws TencentMailException
     */
    public function test_get(): void
    {
        $this->result = $this->instance->get('test@khs1994.com');
    }

    /**
     * @throws TencentMailException
     */
    public function test_delete(): void
    {
        $this->result = $this->instance->delete('test@khs1994.com');
    }

    /**
     * @throws TencentMailException
     */
    public function test_list(): void
    {
        $this->result = $this->instance->list();
    }

    /**
     * @throws TencentMailException
     */
    public function test_listDetails(): void
    {
        $this->result = $this->instance->listDetails();
    }

    /**
     * @throws TencentMailException
     */
    public function test_check(): void
    {
        $this->result = $this->instance->check(['test@khs1994.com']);
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
