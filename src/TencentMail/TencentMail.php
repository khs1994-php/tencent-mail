<?php

declare(strict_types=1);

namespace TencentMail;

use Doctrine\Common\Cache\Cache;
use Doctrine\Common\Cache\FilesystemCache;
use Exception;
use Pimple\Container;

/**
 * @property \GuzzleHttp\Client         $request
 * @property string                     $corpId
 * @property string                     $departmentSecret
 * @property string                     $loginSecret
 * @property string                     $mailSecret
 * @property string                     $userOptionSecret
 * @property string                     $logSecret
 * @property Cache|mixed                $cache
 * @property Service\AccessToken\Client $access_token
 * @property Service\Department\Client  $department
 * @property Service\Group\Client       $group
 * @property Service\Log\Client         $log
 * @property Service\Login\Client       $login
 * @property Service\Mail\Client        $mail
 * @property Service\User\Client        $user
 * @property Service\UserOption\Client  $userOption
 */
class TencentMail extends Container
{
    /**
     * 服务提供器数组.
     */
    protected $providers = [
        Service\AccessToken\ServiceProvider::class,
        Service\Department\ServiceProvider::class,
        Service\Group\ServiceProvider::class,
        Service\Log\ServiceProvider::class,
        Service\Login\ServiceProvider::class,
        Service\Mail\ServiceProvider::class,
        Service\User\ServiceProvider::class,
        Service\UserOption\ServiceProvider::class,
    ];

    /**
     * 注册服务提供器.
     */
    private function registerProviders(): void
    {
        // 取得服务提供器数组.
        $providers = array_merge($this->providers, $this['config']->get('providers', []));
        foreach ($providers as $provider) {
            $this->register(new $provider());
        }
    }

    public function __construct(array $config = [])
    {
        parent::__construct($config);

        // 在容器中注入类
        $this['config'] = new Support\Config($config);

        // 注册一个服务提供者
        // $this->register(new Providers\BBBProvider());

        // 注册服务提供器
        $this->registerProviders();

        $this['request'] = new \GuzzleHttp\Client();

        if (!isset($this['cache'])) {
            $this['cache'] = new FilesystemCache(sys_get_temp_dir());
        }
    }

    /**
     * 通过调用属性，获取对象
     *
     * @param $name
     * @param $arguments
     *
     * @throws Exception
     *
     * @return mixed
     */
    public function __get($name)
    {
        // $example->调用不存在属性时
        if (isset($this[$name])) {
            return $this[$name];
        }

        var_dump($this[$name]);

        throw new Exception('Not found');
    }

    public function __call($name, $arguments)
    {
        return $this->$name;
    }
}
