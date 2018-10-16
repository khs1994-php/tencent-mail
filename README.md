# tencent-mail

[![GitHub stars](https://img.shields.io/github/stars/khs1994-php/tencent-mail.svg?style=social&label=Stars)](https://github.com/khs1994-php/tencent-mail) [![PHP from Packagist](https://img.shields.io/packagist/php-v/khs1994/tencent-mail.svg)](https://packagist.org/packages/khs1994/tencent-mail) [![GitHub (pre-)release](https://img.shields.io/github/release/khs1994-php/tencent-mail/all.svg)](https://github.com/khs1994-php/tencent-mail/releases) [![Build Status](https://travis-ci.org/khs1994-php/tencent-mail.svg?branch=master)](https://travis-ci.org/khs1994-php/tencent-mail) [![StyleCI](https://styleci.io/repos/115306597/shield?branch=master)](https://styleci.io/repos/115306597) [![](https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg)](https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61) [![codecov](https://codecov.io/gh/khs1994-php/tencent-mail/branch/master/graph/badge.svg)](https://codecov.io/gh/khs1994-php/tencent-mail)

A PHP Library for the Tencent Mail

* [Tencent EXMAIL](https://exmail.qq.com/)
* [Official Documents](https://exmail.qq.com/qy_mng_logic/doc#10001)
* [Documents](https://khs1994-php.github.io/tencent-mail)

## 微信订阅号

<p align="center">
<img width="200" src="https://user-images.githubusercontent.com/16733187/46847944-84a96b80-ce19-11e8-9f0c-ec84b2ac463e.jpg">
</p>

<p align="center"><strong>关注项目作者微信订阅号，接收项目最新动态。</strong></p>

## Installation

To Use the package, simply:

```bash
$ composer require khs1994/tencent-mail
```

For latest commit version:

```bash
$ composer require khs1994/tencent-mail dev-master
```

## Usage

```php
<?php

require __DIR__.'/vendor/autoload.php';

$config = [];

$mail = new \TencentMail\TencentMail($config);

// get login url
$mail->login->getLoginUrl('khs1994@khs1994.com');
```

## Laravel

```bash
$ php artisan vendor:publish --tag=config
```

Then edit config file `config/tencent-mail.php`

```php
<?php

\TencentMail::login()->getLoginUrl('khs1994@khs1994.com');
```

## PHP CaaS

**Powered By [khs1994-docker/lnmp](https://github.com/khs1994-docker/lnmp)**

## CI/CD

* [Drone](https://www.khs1994.com/categories/CI/Drone/)
* [Travis CI](https://travis-ci.org/khs1994-php/tencent-mail)
* [Style CI](https://styleci.io/repos/115306597)
* [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
* [Renovate](https://github.com/marketplace/renovate)
* [Dependabot](https://github.com/marketplace/dependabot)
* [Aliyun CodePipeline](https://www.aliyun.com/product/codepipeline)
* [Tencent Cloud Continuous Integration](https://cloud.tencent.com/product/cci)
* [Docker Build Powered By Tencent Cloud Container Service](https://cloud.tencent.com/product/ccs)
* [Docker Build Powered By Docker Cloud](https://cloud.docker.com)
* [Docker Build Powered By Aliyun Container Service](https://www.aliyun.com/product/containerservice)
