<?php

declare(strict_types=1);

namespace TencentMail\Service\AccessToken;

use Doctrine\Common\Cache\Cache;
use TencentMail\TencentMail;

class Client
{
    protected $http;

    protected $id;

    protected $cache;

    protected $endpoint = 'https://api.exmail.qq.com/cgi-bin';

    public function __construct(TencentMail $app)
    {
        $this->http = $app->request;
        $this->id = $app->corpId;
        $this->cache = $app->cache;
    }

    /**
     * @param string $corpsecret
     * @param bool   $force
     *
     * @return mixed
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function get(string $corpsecret, bool $force = false)
    {
        $token = $this->getCache($corpsecret);

        if ($token && !$force) {
            return $token;
        }

        $url = $this->endpoint.sprintf('/gettoken?corpid=%s&corpsecret=%s', $this->id, $corpsecret);
        $result = $this->http->request('GET', $url)->getBody()->getContents();
        $token = (json_decode($result))->access_token;
        $this->putCache($corpsecret, $token, 7100);

        return $token;
    }

    public function getCache($key)
    {
        if ($this->cache instanceof Cache) {
            return $this->cache->fetch($key);
        }

        return $this->cache->get($key);
    }

    public function putCache($key, $value, $expire = 7100): void
    {
        if ($this->cache instanceof Cache) {
            $this->cache->save($key, $value, $expire);

            return;
        }

        $this->cache->put($key, $value, $expire);
    }
}
