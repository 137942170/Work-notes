# Work-notes
# 如何为ubuntu14.04创建init.d自启动脚本
ubuntu创建初始化脚本

首先，我们将在/etc/init.d文件夹中创建一个名为tomcat的脚本。

    #! /bin/sh
    ### BEGIN INIT INFO
    # Provides: tomcat
    # Required-Start: $remote_fs $syslog
    # Required-Stop: $remote_fs $syslog
    # Default-Start: 2 3 4 5
    # Default-Stop: 0 1 6
    # Short-Description: Tomcat
    # Description: This file starts and stops Tomcat server
    # 
    ### END INIT INFO

    TOMCAT_DIR=/home/joe/programs/apache-tomcat-8.0.5/
    export JAVA_HOME=/home/joe/programs/jdk1.8.0_05

    case "$1" in
     start)
       su joe -c $TOMCAT_DIR/bin/startup.sh
       ;;
     stop)
       su joe -c $TOMCAT_DIR/bin/shutdown.sh
       sleep 10
       ;;
     restart)
       su joe -c $TOMCAT_DIR/bin/shutdown.sh
       sleep 20
       su joe -c $TOMCAT_DIR/bin/startup.sh
       ;;
     *)
       echo "Usage: tomcat {start|stop|restart}" >&2
       exit 3
       ;;
    esac
“Default-Start”字段指定将使用“start”参数运行脚本的运行级别。 “默认停止”反过来。例如，当机器关闭并进入运行级别1时，脚本将使用“stop”参数运行,用脚本执行

    sudo chmod a+x tomcat
始终通过从命令行运行单元测试脚本。例如：

    sudo ./tomcat start
    sudo ./tomcat stop
如果一切正常，则将脚本注册为init脚本：

    sudo update-rc.d tomcat defaults
重新启动机器并确保Tomcat已启动。
