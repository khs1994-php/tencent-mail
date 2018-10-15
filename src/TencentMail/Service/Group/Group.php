<?php

declare(strict_types=1);

namespace TencentMail\Service\Group;

class Group
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $name;

    /**
     * @var array
     */
    public $userlist;

    /**
     * @var array
     */
    public $grouplist;

    /**
     * @var array
     */
    public $department;

    /**
     * @var int 群发权限。0: 企业成员, 1任何人， 2:组内成员，3:指定成员
     */
    public $allow_type;

    /**
     * @var array 群发权限为指定成员时，需要指定成员
     */
    public $allow_userlist;

    /**
     * @return array
     */
    public function build()
    {
        $groupid = $this->id;
        $groupname = $this->name;
        $userlist = $this->userlist;
        $grouplist = $this->grouplist;
        $department = $this->department;
        $allow_type = $this->allow_type;
        $allow_userlist = $this->allow_userlist;

        return array_filter(compact('groupid', 'groupname', 'userlist',
            'grouplist', 'department', 'allow_type', 'allow_userlist'));
    }
}
