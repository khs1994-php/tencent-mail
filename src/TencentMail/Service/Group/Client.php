<?php

declare(strict_types=1);

namespace TencentMail\Service\Group;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/group';

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
     * 创建邮件群组.
     *
     * @param Group $group
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10022
     */
    public function create(Group $group)
    {
        $url = $this->endpoint.sprintf('/create?access_token=%s', $this->access_token);
        $body = $group->build();

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 更新邮件群组.
     *
     * @param Group $group
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10023
     */
    public function update(Group $group)
    {
        $url = $this->endpoint.sprintf('/update?access_token=%s', $this->access_token);
        $body = $group->build();

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 删除邮件群组.
     *
     * @param string $groupId 邮件群组id，邮件格式
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10024
     */
    public function delete(string $groupId)
    {
        $url = $this->endpoint.sprintf('/delete?access_token=%s&groupid=%s', $this->access_token, $groupId);

        return $this->request($url);
    }

    /**
     * 获取邮件群组信息.
     *
     * @param string $groupId 邮件群组id，邮件格式
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10025
     */
    public function get(string $groupId)
    {
        $url = $this->endpoint.sprintf('/get?access_token=%s&groupid=%s', $this->access_token, $groupId);

        return $this->request($url);
    }
}
