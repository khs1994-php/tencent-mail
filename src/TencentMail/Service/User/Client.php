<?php

declare(strict_types=1);

namespace TencentMail\Service\User;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/user';

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
        $this->http = $app->request;
        $this->access_token = $app->access_token->get($app->departmentSecret);
    }

    /**
     * 创建成员.
     *
     * @param User $user
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10014
     */
    public function create(User $user)
    {
        $url = $this->endpoint.sprintf('/create?access_token=%s', $this->access_token);
        $body = $user->build();

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 更新成员.
     *
     * @param User $user
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10015
     */
    public function update(User $user)
    {
        $url = $this->endpoint.sprintf('/update?access_token=%s', $this->access_token);
        $body = $user->build();

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 删除成员.
     *
     * @param string $userId 成员UserID。企业邮帐号名，邮箱格式
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10016
     */
    public function delete(string $userId)
    {
        $url = $this->endpoint.sprintf(
                '/delete?access_token=%s&userid=%s', $this->access_token, $userId);

        return $this->request($url);
    }

    /**
     * 获取成员.
     *
     * @param string $userId 成员 UserID
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10017
     */
    public function get(string $userId)
    {
        $url = $this->endpoint.sprintf(
                '/get?access_token=%s&userid=%s', $this->access_token, $userId);

        return $this->request($url);
    }

    /**
     * 获取部门成员.
     *
     * @param int  $department_id 获取的部门id。id 为 1 时可获取根部门下的成员
     * @param bool $fetch_child   是否递归获取子部门下面的成员
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10018
     */
    public function list(int $department_id = 1, bool $fetch_child = false)
    {
        $url = $this->endpoint.sprintf(
                '/simplelist?access_token=%s&department_id=%s&fetch_child=%s',
                $this->access_token,
                $department_id,
                (int) $fetch_child
            );

        return $this->request($url);
    }

    /**
     * 获取部门成员（详情）.
     *
     * @param int  $department_id 获取的部门 id。id 为 1 时可获取根部门下的成员
     * @param bool $fetch_child   是否递归获取子部门下面的成员
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10019
     */
    public function listDetails(int $department_id = 1, bool $fetch_child = false)
    {
        $url = $this->endpoint.sprintf(
                '/list?access_token=%s&department_id=%s&fetch_child=%s',
                $this->access_token,
                $department_id,
                (int) $fetch_child
            );

        return $this->request($url);
    }

    /**
     * 批量检查帐号.
     *
     * @param array $userlist 成员帐号，每次检查不得超过20个
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10020
     */
    public function check(array $userlist)
    {
        $url = $this->endpoint.sprintf(
                '/batchcheck?access_token=%s', $this->access_token);
        $body = compact('userlist');

        return $this->request($url, 'POST', ['json' => $body]);
    }
}
