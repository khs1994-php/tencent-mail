<?php

declare(strict_types=1);

namespace TencentMail\Support;

use TencentMail\TencentMail;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    /**
     * 是否延时加载提供器。
     *
     * @var bool
     */
    protected $defer = true;

    protected function connection(string $app)
    {
        return new TencentMail([
            'corpId' => config(sprintf('tencent-mail.app.%s.corpId', $app)),
            'departmentSecret' => config(sprintf('tencent-mail.app.%s.departmentSecret', $app)),
            'loginSecret' => config(sprintf('tencent-mail.app.%s.loginSecret', $app)),
            'mailSecret' => config(sprintf('tencent-mail.app.%s.mailSecret', $app)),
            'userOptionSecret' => config(sprintf('tencent-mail.app.%s.userOptionSecret', $app)),
            'logSecret' => config(sprintf('tencent-mail.app.%s.logSecret', $app)),
            'cache' => resolve('cache'),
        ]);
    }

    /**
     * 在容器中注册绑定。
     */
    public function register(): void
    {
        $configPath = __DIR__.'/../../../config/tencent-mail.php';
        $this->mergeConfigFrom($configPath, 'tencent-mail');
        // $this->loadRoutesFrom(__DIR__.'/routes.php');
        // $this->loadMigrationsFrom(__DIR__.'/path/to/migrations');
        // $this->loadTranslationsFrom(__DIR__.'/path/to/translations', 'courier');
        $this->app->singleton(TencentMail::class, function ($app) {
            $default_app = config('tencent-mail.default', 'default');
            return $this->connection($default_app);
        });

        $this->app->alias(TencentMail::class, 'tencentMail');
        //        $this->app->bind(TencentMail::class, function () {
        //            return ;
        //        });
    }

    /**
     * 在注册后进行服务的启动。
     */
    public function boot(): void
    {
        $configPath = __DIR__.'/../../../config/tencent-mail.php';
        $this->publishes([$configPath => $this->getConfigPath()], 'config');
        // $this->loadTranslationsFrom(__DIR__.'/path/to/translations', 'courier');
        // $this->publishes([
        //   __DIR__.'/path/to/translations' => resource_path('lang/vendor/courier'),
        // ]);
        // $this->loadViewsFrom(__DIR__.'/path/to/views', 'courier');
        // $this->publishes([
        //    __DIR__.'/path/to/views' => resource_path('views/vendor/courier'),
        // ]);
//        if ($this->app->runningInConsole()) {
//            $this->commands([
//                Console\ExampleCommand::class,
//            ]);
//        }
        // $this->publishes([
        //     __DIR__.'/path/to/assets' => public_path('vendor/courier'),
        // ], 'public');
    }

    /**
     * Get the config path.
     *
     * @return string
     */
    protected function getConfigPath()
    {
        return config_path('tencent-mail.php');
    }

    /**
     * 获取提供器提供的服务。
     *
     * @return array
     */
    public function provides()
    {
        return [TencentMail::class];
    }
}
