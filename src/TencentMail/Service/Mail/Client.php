<?php

declare(strict_types=1);

namespace TencentMail\Service\Mail;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/mail';

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
        $this->access_token = $app->access_token->get($app->mailSecret);
    }

    /**
     * 获取邮件未读数.
     *
     * @param string $userId
     * @param string $begin_date
     * @param string $end_date
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10033
     */
    public function newCount(string $userId, string $begin_date, string $end_date)
    {
        $url = $this->endpoint.sprintf('/newcount?access_token=%s&userid=%s', $this->access_token, $userId);
        $type = 0;
        $body = compact('type', 'begin_date', 'end_date');

        return $this->request($url, 'POST', ['json' => $body]);
    }
}
