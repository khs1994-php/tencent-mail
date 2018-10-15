<?php

declare(strict_types=1);

namespace TencentMail\Kernel;

use TencentMail\Exception\TencentMailException;

trait RequestTrait
{
    /**
     * @param string $url
     * @param string $method
     * @param array  $body
     *
     * @return string
     *
     * @throws TencentMailException
     */
    private function request(string $url, string $method = 'GET', array $body = [])
    {
        $result = $this->http->request($method, $url, $body)->getBody()->getContents();
        $result_obj = json_decode($result);
        $errcode = $result_obj->errcode ?? 0;

        if (0 === $errcode) {
            return $result;
        }

        throw new TencentMailException($result_obj->errmsg, $errcode);
    }
}
