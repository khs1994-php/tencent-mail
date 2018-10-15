<?php

declare(strict_types=1);

namespace TencentMail\Service\User;

class User
{
    /**
     * @var string 成员UserID。企业邮帐号名，邮箱格式
     */
    public $id;

    /**
     * @var string 成员名称。长度为1~64个字节
     */
    public $name;

    /**
     * @var array 成员所属部门id列表，不超过20个
     */
    public $department;

    /**
     * @var string 职位信息。长度为0~64个字节
     */
    public $position;

    /**
     * @var string 手机号码
     */
    public $mobile;

    /**
     * @var string 座机号码
     */
    public $tel;

    /**
     * @var int 编号
     */
    public $extid;

    /**
     * @var int 性别。1 表示男， 2 表示女
     */
    public $gender = 1;

    /**
     * @var array 别名列表。上限为 5 个，邮箱格式
     */
    public $slaves;

    /**
     * @var bool 启用/禁用成员。1 表示启用成员，0 表示禁用成员
     */
    public $enable = true;

    /**
     * @var string 密码
     */
    public $password;

    /**
     * @var bool 用户重新登录时是否重设密码, 登陆重设密码后，该标志位还原。0表示否，1表示是，缺省为 0
     */
    public $cpwd_login = false;

    public function build()
    {
        $userid = $this->id;
        $name = $this->name;
        $department = $this->department;
        $position = $this->position;
        $mobile = $this->mobile;
        $tel = $this->tel;
        $extid = (string) $this->extid;
        $gender = (string) $this->gender;
        $slaves = $this->slaves;
        $password = $this->password;
        $cpwd_login = (int) $this->cpwd_login;

        return array_filter(compact('userid', 'name', 'department', 'position',
            'mobile', 'tel', 'extid', 'gender', 'slaves', 'password', 'cpwd_login'));
    }
}
