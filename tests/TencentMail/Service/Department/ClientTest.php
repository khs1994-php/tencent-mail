<?php

declare(strict_types=1);

namespace TencentMail\Tests\Service\Department;

use TencentMail\Service\Department\Client;
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
        $this->instance = self::getTest()->department;
    }

    /**
     * @return mixed
     *
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_create()
    {
        $this->result = $this->instance->create('test', 1);

        return json_decode($this->result)->id;
    }

    /**
     * @depends test_create
     *
     * @param $id
     *
     * @return int
     *
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_update($id)
    {
        $this->result = $this->instance->update((int) $id, 'test_update');

        return (int) $id;
    }

    /**
     * @param $id
     *
     * @depends test_update
     *
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_delete($id): void
    {
        $this->result = $this->instance->delete($id);
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_list(): void
    {
        $this->result = $this->instance->list();
    }

    /**
     * @throws \TencentMail\Exception\TencentMailException
     */
    public function test_find(): void
    {
        $this->result = $this->instance->find('test');
    }

    public function tearDown(): void
    {
        $this->assertEquals(0, json_decode($this->result)->errcode);
    }
}
