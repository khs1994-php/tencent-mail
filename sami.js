
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Example" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Example.html">Example</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Example_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Example/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Example_Console_Command" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Example/Console/Command.html">Command</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail.html">TencentMail</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:TencentMail_Exception" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Exception_TencentMailException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TencentMail/Exception/TencentMailException.html">TencentMailException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Kernel" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Kernel.html">Kernel</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Kernel_RequestTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TencentMail/Kernel/RequestTrait.html">RequestTrait</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service.html">Service</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:TencentMail_Service_AccessToken" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/AccessToken.html">AccessToken</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_AccessToken_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/AccessToken/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_AccessToken_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/AccessToken/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_Department" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/Department.html">Department</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_Department_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Department/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Department_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Department/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_Group" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/Group.html">Group</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_Group_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Group/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Group_Group" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Group/Group.html">Group</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Group_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Group/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_Log" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/Log.html">Log</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_Log_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Log/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Log_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Log/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_Login" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/Login.html">Login</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_Login_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Login/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Login_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Login/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_Mail" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/Mail.html">Mail</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_Mail_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Mail/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_Mail_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/Mail/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_User" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/User.html">User</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_User_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/User/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_User_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/User/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_User_User" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/User/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Service_UserOption" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Service/UserOption.html">UserOption</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Service_UserOption_Client" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/UserOption/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:TencentMail_Service_UserOption_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="TencentMail/Service/UserOption/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:TencentMail_Support" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="TencentMail/Support.html">Support</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:TencentMail_Support_Config" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TencentMail/Support/Config.html">Config</a>                    </div>                </li>                            <li data-name="class:TencentMail_Support_Facade" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TencentMail/Support/Facade.html">Facade</a>                    </div>                </li>                            <li data-name="class:TencentMail_Support_ServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="TencentMail/Support/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:TencentMail_TencentMail" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="TencentMail/TencentMail.html">TencentMail</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Example.html", "name": "Example", "doc": "Namespace Example"},{"type": "Namespace", "link": "Example/Console.html", "name": "Example\\Console", "doc": "Namespace Example\\Console"},{"type": "Namespace", "link": "TencentMail.html", "name": "TencentMail", "doc": "Namespace TencentMail"},{"type": "Namespace", "link": "TencentMail/Exception.html", "name": "TencentMail\\Exception", "doc": "Namespace TencentMail\\Exception"},{"type": "Namespace", "link": "TencentMail/Kernel.html", "name": "TencentMail\\Kernel", "doc": "Namespace TencentMail\\Kernel"},{"type": "Namespace", "link": "TencentMail/Service.html", "name": "TencentMail\\Service", "doc": "Namespace TencentMail\\Service"},{"type": "Namespace", "link": "TencentMail/Service/AccessToken.html", "name": "TencentMail\\Service\\AccessToken", "doc": "Namespace TencentMail\\Service\\AccessToken"},{"type": "Namespace", "link": "TencentMail/Service/Department.html", "name": "TencentMail\\Service\\Department", "doc": "Namespace TencentMail\\Service\\Department"},{"type": "Namespace", "link": "TencentMail/Service/Group.html", "name": "TencentMail\\Service\\Group", "doc": "Namespace TencentMail\\Service\\Group"},{"type": "Namespace", "link": "TencentMail/Service/Log.html", "name": "TencentMail\\Service\\Log", "doc": "Namespace TencentMail\\Service\\Log"},{"type": "Namespace", "link": "TencentMail/Service/Login.html", "name": "TencentMail\\Service\\Login", "doc": "Namespace TencentMail\\Service\\Login"},{"type": "Namespace", "link": "TencentMail/Service/Mail.html", "name": "TencentMail\\Service\\Mail", "doc": "Namespace TencentMail\\Service\\Mail"},{"type": "Namespace", "link": "TencentMail/Service/User.html", "name": "TencentMail\\Service\\User", "doc": "Namespace TencentMail\\Service\\User"},{"type": "Namespace", "link": "TencentMail/Service/UserOption.html", "name": "TencentMail\\Service\\UserOption", "doc": "Namespace TencentMail\\Service\\UserOption"},{"type": "Namespace", "link": "TencentMail/Support.html", "name": "TencentMail\\Support", "doc": "Namespace TencentMail\\Support"},
            
            {"type": "Class", "fromName": "Example\\Console", "fromLink": "Example/Console.html", "link": "Example/Console/Command.html", "name": "Example\\Console\\Command", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Example\\Console\\Command", "fromLink": "Example/Console/Command.html", "link": "Example/Console/Command.html#method_handle", "name": "Example\\Console\\Command::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Exception", "fromLink": "TencentMail/Exception.html", "link": "TencentMail/Exception/TencentMailException.html", "name": "TencentMail\\Exception\\TencentMailException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Exception\\TencentMailException", "fromLink": "TencentMail/Exception/TencentMailException.html", "link": "TencentMail/Exception/TencentMailException.html#method_report", "name": "TencentMail\\Exception\\TencentMailException::report", "doc": "&quot;\u62a5\u544a\u5f02\u5e38.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Exception\\TencentMailException", "fromLink": "TencentMail/Exception/TencentMailException.html", "link": "TencentMail/Exception/TencentMailException.html#method_render", "name": "TencentMail\\Exception\\TencentMailException::render", "doc": "&quot;\u5c06\u5f02\u5e38\u6e32\u67d3\u5230 HTTP \u54cd\u5e94\u4e2d\u3002&quot;"},
            
            {"type": "Trait", "fromName": "TencentMail\\Kernel", "fromLink": "TencentMail/Kernel.html", "link": "TencentMail/Kernel/RequestTrait.html", "name": "TencentMail\\Kernel\\RequestTrait", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "TencentMail\\Service\\AccessToken", "fromLink": "TencentMail/Service/AccessToken.html", "link": "TencentMail/Service/AccessToken/Client.html", "name": "TencentMail\\Service\\AccessToken\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\AccessToken\\Client", "fromLink": "TencentMail/Service/AccessToken/Client.html", "link": "TencentMail/Service/AccessToken/Client.html#method___construct", "name": "TencentMail\\Service\\AccessToken\\Client::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\AccessToken\\Client", "fromLink": "TencentMail/Service/AccessToken/Client.html", "link": "TencentMail/Service/AccessToken/Client.html#method_get", "name": "TencentMail\\Service\\AccessToken\\Client::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\AccessToken\\Client", "fromLink": "TencentMail/Service/AccessToken/Client.html", "link": "TencentMail/Service/AccessToken/Client.html#method_getCache", "name": "TencentMail\\Service\\AccessToken\\Client::getCache", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\AccessToken\\Client", "fromLink": "TencentMail/Service/AccessToken/Client.html", "link": "TencentMail/Service/AccessToken/Client.html#method_putCache", "name": "TencentMail\\Service\\AccessToken\\Client::putCache", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\AccessToken", "fromLink": "TencentMail/Service/AccessToken.html", "link": "TencentMail/Service/AccessToken/ServiceProvider.html", "name": "TencentMail\\Service\\AccessToken\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\AccessToken\\ServiceProvider", "fromLink": "TencentMail/Service/AccessToken/ServiceProvider.html", "link": "TencentMail/Service/AccessToken/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\AccessToken\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Department", "fromLink": "TencentMail/Service/Department.html", "link": "TencentMail/Service/Department/Client.html", "name": "TencentMail\\Service\\Department\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method___construct", "name": "TencentMail\\Service\\Department\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method_create", "name": "TencentMail\\Service\\Department\\Client::create", "doc": "&quot;\u521b\u5efa\u90e8\u95e8.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method_update", "name": "TencentMail\\Service\\Department\\Client::update", "doc": "&quot;\u66f4\u65b0\u90e8\u95e8.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method_delete", "name": "TencentMail\\Service\\Department\\Client::delete", "doc": "&quot;\u5220\u9664\u90e8\u95e8.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method_list", "name": "TencentMail\\Service\\Department\\Client::list", "doc": "&quot;\u83b7\u53d6\u90e8\u95e8\u5217\u8868.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Department\\Client", "fromLink": "TencentMail/Service/Department/Client.html", "link": "TencentMail/Service/Department/Client.html#method_find", "name": "TencentMail\\Service\\Department\\Client::find", "doc": "&quot;\u67e5\u627e\u90e8\u95e8.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Department", "fromLink": "TencentMail/Service/Department.html", "link": "TencentMail/Service/Department/ServiceProvider.html", "name": "TencentMail\\Service\\Department\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Department\\ServiceProvider", "fromLink": "TencentMail/Service/Department/ServiceProvider.html", "link": "TencentMail/Service/Department/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\Department\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Group", "fromLink": "TencentMail/Service/Group.html", "link": "TencentMail/Service/Group/Client.html", "name": "TencentMail\\Service\\Group\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Client", "fromLink": "TencentMail/Service/Group/Client.html", "link": "TencentMail/Service/Group/Client.html#method___construct", "name": "TencentMail\\Service\\Group\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Client", "fromLink": "TencentMail/Service/Group/Client.html", "link": "TencentMail/Service/Group/Client.html#method_create", "name": "TencentMail\\Service\\Group\\Client::create", "doc": "&quot;\u521b\u5efa\u90ae\u4ef6\u7fa4\u7ec4.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Client", "fromLink": "TencentMail/Service/Group/Client.html", "link": "TencentMail/Service/Group/Client.html#method_update", "name": "TencentMail\\Service\\Group\\Client::update", "doc": "&quot;\u66f4\u65b0\u90ae\u4ef6\u7fa4\u7ec4.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Client", "fromLink": "TencentMail/Service/Group/Client.html", "link": "TencentMail/Service/Group/Client.html#method_delete", "name": "TencentMail\\Service\\Group\\Client::delete", "doc": "&quot;\u5220\u9664\u90ae\u4ef6\u7fa4\u7ec4.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Client", "fromLink": "TencentMail/Service/Group/Client.html", "link": "TencentMail/Service/Group/Client.html#method_get", "name": "TencentMail\\Service\\Group\\Client::get", "doc": "&quot;\u83b7\u53d6\u90ae\u4ef6\u7fa4\u7ec4\u4fe1\u606f.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Group", "fromLink": "TencentMail/Service/Group.html", "link": "TencentMail/Service/Group/Group.html", "name": "TencentMail\\Service\\Group\\Group", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Group\\Group", "fromLink": "TencentMail/Service/Group/Group.html", "link": "TencentMail/Service/Group/Group.html#method_build", "name": "TencentMail\\Service\\Group\\Group::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Group", "fromLink": "TencentMail/Service/Group.html", "link": "TencentMail/Service/Group/ServiceProvider.html", "name": "TencentMail\\Service\\Group\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Group\\ServiceProvider", "fromLink": "TencentMail/Service/Group/ServiceProvider.html", "link": "TencentMail/Service/Group/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\Group\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Log", "fromLink": "TencentMail/Service/Log.html", "link": "TencentMail/Service/Log/Client.html", "name": "TencentMail\\Service\\Log\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method___construct", "name": "TencentMail\\Service\\Log\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method_mailStatus", "name": "TencentMail\\Service\\Log\\Client::mailStatus", "doc": "&quot;\u67e5\u8be2\u90ae\u4ef6\u6982\u51b5.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method_mail", "name": "TencentMail\\Service\\Log\\Client::mail", "doc": "&quot;\u67e5\u8be2\u90ae\u4ef6.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method_login", "name": "TencentMail\\Service\\Log\\Client::login", "doc": "&quot;\u67e5\u8be2\u6210\u5458\u767b\u5f55.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method_batchJob", "name": "TencentMail\\Service\\Log\\Client::batchJob", "doc": "&quot;\u67e5\u8be2\u6279\u91cf\u4efb\u52a1&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Log\\Client", "fromLink": "TencentMail/Service/Log/Client.html", "link": "TencentMail/Service/Log/Client.html#method_operation", "name": "TencentMail\\Service\\Log\\Client::operation", "doc": "&quot;\u67e5\u8be2\u64cd\u4f5c\u8bb0\u5f55.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Log", "fromLink": "TencentMail/Service/Log.html", "link": "TencentMail/Service/Log/ServiceProvider.html", "name": "TencentMail\\Service\\Log\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Log\\ServiceProvider", "fromLink": "TencentMail/Service/Log/ServiceProvider.html", "link": "TencentMail/Service/Log/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\Log\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Login", "fromLink": "TencentMail/Service/Login.html", "link": "TencentMail/Service/Login/Client.html", "name": "TencentMail\\Service\\Login\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Login\\Client", "fromLink": "TencentMail/Service/Login/Client.html", "link": "TencentMail/Service/Login/Client.html#method___construct", "name": "TencentMail\\Service\\Login\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Login\\Client", "fromLink": "TencentMail/Service/Login/Client.html", "link": "TencentMail/Service/Login/Client.html#method_getLoginUrl", "name": "TencentMail\\Service\\Login\\Client::getLoginUrl", "doc": "&quot;\u83b7\u53d6\u767b\u5f55\u4f01\u4e1a\u90ae\u7684url.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Login", "fromLink": "TencentMail/Service/Login.html", "link": "TencentMail/Service/Login/ServiceProvider.html", "name": "TencentMail\\Service\\Login\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Login\\ServiceProvider", "fromLink": "TencentMail/Service/Login/ServiceProvider.html", "link": "TencentMail/Service/Login/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\Login\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Mail", "fromLink": "TencentMail/Service/Mail.html", "link": "TencentMail/Service/Mail/Client.html", "name": "TencentMail\\Service\\Mail\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Mail\\Client", "fromLink": "TencentMail/Service/Mail/Client.html", "link": "TencentMail/Service/Mail/Client.html#method___construct", "name": "TencentMail\\Service\\Mail\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\Mail\\Client", "fromLink": "TencentMail/Service/Mail/Client.html", "link": "TencentMail/Service/Mail/Client.html#method_newCount", "name": "TencentMail\\Service\\Mail\\Client::newCount", "doc": "&quot;\u83b7\u53d6\u90ae\u4ef6\u672a\u8bfb\u6570.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\Mail", "fromLink": "TencentMail/Service/Mail.html", "link": "TencentMail/Service/Mail/ServiceProvider.html", "name": "TencentMail\\Service\\Mail\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\Mail\\ServiceProvider", "fromLink": "TencentMail/Service/Mail/ServiceProvider.html", "link": "TencentMail/Service/Mail/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\Mail\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\UserOption", "fromLink": "TencentMail/Service/UserOption.html", "link": "TencentMail/Service/UserOption/Client.html", "name": "TencentMail\\Service\\UserOption\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\UserOption\\Client", "fromLink": "TencentMail/Service/UserOption/Client.html", "link": "TencentMail/Service/UserOption/Client.html#method___construct", "name": "TencentMail\\Service\\UserOption\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\UserOption\\Client", "fromLink": "TencentMail/Service/UserOption/Client.html", "link": "TencentMail/Service/UserOption/Client.html#method_get", "name": "TencentMail\\Service\\UserOption\\Client::get", "doc": "&quot;\u83b7\u53d6\u529f\u80fd\u5c5e\u6027.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\UserOption\\Client", "fromLink": "TencentMail/Service/UserOption/Client.html", "link": "TencentMail/Service/UserOption/Client.html#method_change", "name": "TencentMail\\Service\\UserOption\\Client::change", "doc": "&quot;\u66f4\u6539\u529f\u80fd\u5c5e\u6027.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\UserOption", "fromLink": "TencentMail/Service/UserOption.html", "link": "TencentMail/Service/UserOption/ServiceProvider.html", "name": "TencentMail\\Service\\UserOption\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\UserOption\\ServiceProvider", "fromLink": "TencentMail/Service/UserOption/ServiceProvider.html", "link": "TencentMail/Service/UserOption/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\UserOption\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\User", "fromLink": "TencentMail/Service/User.html", "link": "TencentMail/Service/User/Client.html", "name": "TencentMail\\Service\\User\\Client", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method___construct", "name": "TencentMail\\Service\\User\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_create", "name": "TencentMail\\Service\\User\\Client::create", "doc": "&quot;\u521b\u5efa\u6210\u5458.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_update", "name": "TencentMail\\Service\\User\\Client::update", "doc": "&quot;\u66f4\u65b0\u6210\u5458.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_delete", "name": "TencentMail\\Service\\User\\Client::delete", "doc": "&quot;\u5220\u9664\u6210\u5458.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_get", "name": "TencentMail\\Service\\User\\Client::get", "doc": "&quot;\u83b7\u53d6\u6210\u5458.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_list", "name": "TencentMail\\Service\\User\\Client::list", "doc": "&quot;\u83b7\u53d6\u90e8\u95e8\u6210\u5458.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_listDetails", "name": "TencentMail\\Service\\User\\Client::listDetails", "doc": "&quot;\u83b7\u53d6\u90e8\u95e8\u6210\u5458\uff08\u8be6\u60c5\uff09.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Service\\User\\Client", "fromLink": "TencentMail/Service/User/Client.html", "link": "TencentMail/Service/User/Client.html#method_check", "name": "TencentMail\\Service\\User\\Client::check", "doc": "&quot;\u6279\u91cf\u68c0\u67e5\u5e10\u53f7.&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\User", "fromLink": "TencentMail/Service/User.html", "link": "TencentMail/Service/User/ServiceProvider.html", "name": "TencentMail\\Service\\User\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\User\\ServiceProvider", "fromLink": "TencentMail/Service/User/ServiceProvider.html", "link": "TencentMail/Service/User/ServiceProvider.html#method_register", "name": "TencentMail\\Service\\User\\ServiceProvider::register", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Service\\User", "fromLink": "TencentMail/Service/User.html", "link": "TencentMail/Service/User/User.html", "name": "TencentMail\\Service\\User\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Service\\User\\User", "fromLink": "TencentMail/Service/User/User.html", "link": "TencentMail/Service/User/User.html#method_build", "name": "TencentMail\\Service\\User\\User::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Support", "fromLink": "TencentMail/Support.html", "link": "TencentMail/Support/Config.html", "name": "TencentMail\\Support\\Config", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Support\\Config", "fromLink": "TencentMail/Support/Config.html", "link": "TencentMail/Support/Config.html#method___construct", "name": "TencentMail\\Support\\Config::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Support\\Config", "fromLink": "TencentMail/Support/Config.html", "link": "TencentMail/Support/Config.html#method_get", "name": "TencentMail\\Support\\Config::get", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Support", "fromLink": "TencentMail/Support.html", "link": "TencentMail/Support/Facade.html", "name": "TencentMail\\Support\\Facade", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Support\\Facade", "fromLink": "TencentMail/Support/Facade.html", "link": "TencentMail/Support/Facade.html#method_getFacadeAccessor", "name": "TencentMail\\Support\\Facade::getFacadeAccessor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "TencentMail\\Support", "fromLink": "TencentMail/Support.html", "link": "TencentMail/Support/ServiceProvider.html", "name": "TencentMail\\Support\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\Support\\ServiceProvider", "fromLink": "TencentMail/Support/ServiceProvider.html", "link": "TencentMail/Support/ServiceProvider.html#method_connection", "name": "TencentMail\\Support\\ServiceProvider::connection", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Support\\ServiceProvider", "fromLink": "TencentMail/Support/ServiceProvider.html", "link": "TencentMail/Support/ServiceProvider.html#method_register", "name": "TencentMail\\Support\\ServiceProvider::register", "doc": "&quot;\u5728\u5bb9\u5668\u4e2d\u6ce8\u518c\u7ed1\u5b9a\u3002&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Support\\ServiceProvider", "fromLink": "TencentMail/Support/ServiceProvider.html", "link": "TencentMail/Support/ServiceProvider.html#method_boot", "name": "TencentMail\\Support\\ServiceProvider::boot", "doc": "&quot;\u5728\u6ce8\u518c\u540e\u8fdb\u884c\u670d\u52a1\u7684\u542f\u52a8\u3002&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Support\\ServiceProvider", "fromLink": "TencentMail/Support/ServiceProvider.html", "link": "TencentMail/Support/ServiceProvider.html#method_getConfigPath", "name": "TencentMail\\Support\\ServiceProvider::getConfigPath", "doc": "&quot;Get the config path.&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\Support\\ServiceProvider", "fromLink": "TencentMail/Support/ServiceProvider.html", "link": "TencentMail/Support/ServiceProvider.html#method_provides", "name": "TencentMail\\Support\\ServiceProvider::provides", "doc": "&quot;\u83b7\u53d6\u63d0\u4f9b\u5668\u63d0\u4f9b\u7684\u670d\u52a1\u3002&quot;"},
            
            {"type": "Class", "fromName": "TencentMail", "fromLink": "TencentMail.html", "link": "TencentMail/TencentMail.html", "name": "TencentMail\\TencentMail", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "TencentMail\\TencentMail", "fromLink": "TencentMail/TencentMail.html", "link": "TencentMail/TencentMail.html#method___construct", "name": "TencentMail\\TencentMail::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\TencentMail", "fromLink": "TencentMail/TencentMail.html", "link": "TencentMail/TencentMail.html#method___get", "name": "TencentMail\\TencentMail::__get", "doc": "&quot;\u901a\u8fc7\u8c03\u7528\u5c5e\u6027\uff0c\u83b7\u53d6\u5bf9\u8c61&quot;"},
                    {"type": "Method", "fromName": "TencentMail\\TencentMail", "fromLink": "TencentMail/TencentMail.html", "link": "TencentMail/TencentMail.html#method___call", "name": "TencentMail\\TencentMail::__call", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


