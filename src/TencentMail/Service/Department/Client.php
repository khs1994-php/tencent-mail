<?php

declare(strict_types=1);

namespace TencentMail\Service\Department;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $app;

    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/department';

    use RequestTrait;

    /**
     * Client constructor.
     *
     * @param TencentMail $app
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function __construct(TencentMail $app)
    {
        $this->app = $app;
        $this->http = $app->request;
        $this->access_token = $app->access_token->get($app->departmentSecret);
    }

    /**
     * 创建部门.
     *
     * @param string $name     部门名称。长度限制为1~64个字节，字符不能包括\:*?"<>｜
     * @param int    $parentid 父部门 ID。id为1可表示根部门
     * @param int    $order    在父部门中次序值。值小的排序靠前，1-10000为保留值，若使用保留值，将被强制重置为0。
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10008
     */
    public function create(string $name, int $parentid = 1, int $order = 0)
    {
        $url = $this->endpoint.sprintf('/create?access_token=%s', $this->access_token);
        $body = compact('name', 'parentid', 'order');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 更新部门.
     *
     * @param int    $id       部门 id
     * @param string $name     更新的部门名称
     * @param int    $parentid 父部门 id。id 为 1 表示根部门
     * @param int    $order    在父部门中次序值。值小的排序靠前，1-10000为保留值，若使用保留值，将被强制重置为0。
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10009
     */
    public function update(int $id, string $name, int $parentid = 1, int $order = 0)
    {
        $url = $this->endpoint.sprintf('/update?access_token=%s', $this->access_token);
        $body = compact('id', 'name', 'parentid', 'order');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 删除部门.
     *
     * @param int $id 部门id。不能删除根部门；不能删除含有子部门、成员的部门
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10010
     */
    public function delete(int $id)
    {
        $url = $this->endpoint.sprintf('/delete?access_token=%s&id=%s', $this->access_token, $id);

        return $this->request($url);
    }

    /**
     * 获取部门列表.
     *
     * @param int $id 部门id。获取指定部门及其下的子部门。id为1时可获取根部门下的子部门。
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10011
     */
    public function list(int $id = 1)
    {
        $url = $this->endpoint.sprintf('/list?access_token=%s&id=%s', $this->access_token, $id);

        return $this->request($url);
    }

    /**
     * 查找部门.
     *
     * @param string $name  查找的部门名字，必须合法
     * @param bool   $fuzzy 是否模糊匹配
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10012
     */
    public function find(string $name, bool $fuzzy = true)
    {
        $url = $this->endpoint.sprintf('/search?access_token=%s', $this->access_token);
        $fuzzy = (int) $fuzzy;
        $body = compact('name', 'fuzzy');

        return $this->request($url, 'POST', ['json' => $body]);
    }
}
