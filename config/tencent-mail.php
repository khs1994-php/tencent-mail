<?php

declare(strict_types=1);

return [
    'default' => env('TENCENT_MAIL_APP', 'default'),

    'app' => [
        'default' => [
            'corpId' => env('TENCENT_MAIL_CORP_ID'),
            'departmentSecret' => env('TENCENT_MAIL_DEPARTMENT_SECRET'),
            'loginSecret' => env('TENCENT_MAIL_LOGIN_SECRET'),
            'mailSecret' => env('TENCENT_MAIL_MAIL_SECRET'),
            'userOptionSecret' => env('TENCENT_MAIL_USEROPTION_SECRET'),
            'logSecret' => env('TENCENT_MAIL_LOG_SECRET'),
        ],

        'other' => [
        ],
    ],
];
