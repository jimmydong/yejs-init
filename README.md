# yejs-init  

Yam Easy JavaScript 番薯JS快速开发原型

## 使用YEJS初始化页面开发

1，准备工作

    clone项目
    npm install 安装依赖包
    mkdir log; chmod 777 log;  创建日志目录

2，使用vue+museui创建单页面项目（非编译模式）

	编辑修改 dist/index.html
	运行 ./server.sh
	在浏览器访问 http://yourhost:3080/index.html
	继续修改任意.js或.html文件，浏览器内容自动刷新
	
3，使用vue+museui创建单页面项目（编译模式）

	编辑修改 dist/build.html 和 dist/page/index/_index.js
	运行 ./gulp 
	在浏览器访问 http://yourhost:3080/build.html
	继续修改任意.js或.html文件，自动编译并且浏览器自动刷新
	
	如果需要开发多页面，需修改：
	1, gulpfile.js 中 rjs.optimize的 name/out (输入文件、输出文件)
	2，修改build.html中 _index_build.js 为输出文件

4，以后台方式运行

	./start.sh 
	在 log/ 目录下查看日志

5，使用Scss+Gulp+BowserSync快速进行页面制作

    编辑修改 dist/scss.html
    在src/scss下编写scss文件
    运行 gulp  (或运行 start.sh 以服务方式后台运行）
    在浏览器访问 http://yourhost:3080/scss.html
    修改scss.html或.scss文件，浏览器内容自动刷新
    
## YEJS 扩展工具

### js 扩展

wait ...

### vue 扩展

wait ...