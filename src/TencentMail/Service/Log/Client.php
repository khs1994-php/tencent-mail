<?php

declare(strict_types=1);

namespace TencentMail\Service\Log;

use TencentMail\Exception\TencentMailException;
use TencentMail\Kernel\RequestTrait;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $access_token;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin/log';

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
        $this->access_token = $app->access_token->get($app->logSecret);
    }

    /**
     * 查询邮件概况.
     *
     * @param string $domain     域名
     * @param string $begin_date 开始日期。格式为2016-10-01
     * @param string $end_date   结束日期。格式为2016-10-07
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10027
     */
    public function mailStatus(string $domain, string $begin_date, string $end_date)
    {
        $url = $this->endpoint.sprintf('/mailstatus?access_token=%s', $this->access_token);
        $body = compact('domain', 'begin_date', 'end_date');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 查询邮件.
     *
     * @param string $begin_date 开始日期。格式为2016-10-01
     * @param string $end_date   开始日期。格式为2016-10-07
     * @param int    $mailtype   邮件类型。0:收信+发信 1:发信 2:收信
     * @param string $userid     筛选条件：指定成员帐号
     * @param string $subject    筛选条件：包含指定主题内容
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10028
     */
    public function mail(string $begin_date,
                         string $end_date,
                         int $mailtype = 0,
                         string $userid = null,
                         string $subject = null)
    {
        $url = $this->endpoint.sprintf('/mail?access_token=%s', $this->access_token);
        $body = array_filter(
            compact('begin_date', 'end_date', 'mailtype', 'userid', 'subject'));

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 查询成员登录.
     *
     * @param string $userid     成员 UserID。企业邮帐号名，邮箱格式
     * @param string $begin_date 开始日期。格式为 2016-10-01
     * @param string $end_date   结束日期。格式为 2016-10-07
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10029
     */
    public function login(string $userid, string $begin_date, string $end_date)
    {
        $url = $this->endpoint.sprintf('/login?access_token=%s', $this->access_token);
        $body = compact('userid', 'begin_date', 'end_date');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 查询批量任务
     *
     * @param string $begin_date 开始日期。格式为 2016-10-01
     * @param string $end_date   结束日期。格式为 2016-10-07
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10030
     */
    public function batchJob(string $begin_date, string $end_date)
    {
        $url = $this->endpoint.sprintf('/batchjob?access_token=%s', $this->access_token);
        $body = compact('begin_date', 'end_date');

        return $this->request($url, 'POST', ['json' => $body]);
    }

    /**
     * 查询操作记录.
     *
     * @param int    $type       类型 1：all 2：开放协议同步 3：编辑管理员帐号 4：设置分级管理员 5：编辑企业信息 6：收信黑名单设置
     *                           7：邮件转移设置 8：成员与群组管理 9：邮件备份管理 10：成员权限控制
     * @param string $begin_date 开始日期。格式为 2016-10-01
     * @param string $end_date   结束日期。格式为 2016-10-07
     *
     * @return string
     *
     * @throws TencentMailException
     *
     * @see https://exmail.qq.com/qy_mng_logic/doc#10031
     */
    public function operation(int $type, string $begin_date, string $end_date)
    {
        $url = $this->endpoint.sprintf('/operation?access_token=%s', $this->access_token);
        $body = compact('type', 'begin_date', 'end_date');

        return $this->request($url, 'POST', ['json' => $body]);
    }
}
