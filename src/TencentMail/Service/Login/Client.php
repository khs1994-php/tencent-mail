<?php

declare(strict_types=1);

namespace TencentMail\Service\Login;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/service';

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
        $this->access_token = $app->access_token->get($app->loginSecret);
    }

    /**
     * 获取登录企业邮的url.
     *
     * @param string $userId
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10036
     */
    public function getLoginUrl(string $userId)
    {
        $url = $this->endpoint.sprintf(
            '/get_login_url?access_token=%s&userid=%s',
            $this->access_token,
            $userId
        );

        return $this->request($url);
    }
}
