<?php

declare(strict_types=1);

namespace TencentMail\Service\UserOption;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/useroption';

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
        $this->access_token = $app->access_token->get($app->userOptionSecret);
    }

    /**
     * 获取功能属性.
     *
     * @param string $userid
     * @param array  $type   功能设置属性类型 1: 强制启用安全登录 2: IMAP/SMTP服务 3: POP/SMTP服务 4: 是否启用安全登录
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10047
     *
     * @return string
     *
     * @throws TencentMailException
     */
    public function get(string $userid, array $type = [1, 2, 3, 4])
    {
        $url = $this->endpoint.sprintf('/get?access_token=%s', $this->access_token);
        $body = compact('userid', 'type');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 更改功能属性.
     *
     * @param string $userid 成员UserID。企业邮帐号名，邮箱格式
     * @param array  $option [['type'=>1,'value'=>'0'],['type'=>2,'value'=>'0'],['type'=>3,'value'=>'0'],['type'=>4,'value'=>'0']]
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10048
     */
    public function change(string $userid, array $option)
    {
        $url = $this->endpoint.sprintf('/update?access_token=%s', $this->access_token);
        $body = compact('userid', 'option');

        return $this->request($url, 'POST', ['json' => $body]);
    }
}
