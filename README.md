# yejs-init  

Yam Easy JavaScript 番薯JS快速开发原型

## 使用YEJS初始化页面开发

1，准备工作

    clone项目
    npm install    #安装依赖包
    mkdir log      #创建日志目录
    chmod 777 log  #可写  

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

4，开发更多页面

	创建主文件（参考index.html），eg: dist/router.html
	创建主js和模板, eg: dist/page/index/router.js , router.html
	
5，开发更多编译页面

	1, 创建编译配置文件, eg: dist/page/index/_router_profile.js
	2, 创建编译主文件，eg: dist/page/index/_router.js
	3, 手工进行编译： cd dist/page; ./build index router ， 生成编译结果文件，eg: dist/page/index/_router_build.js
	4，将主页面文件改写为加载编译结果文件
	（实际上，2的编译主文件内容就是从主JS中剪切出来的部分）

[注] 整体使用YEPF框架时，_[action]_profile.js 和 _[action].js 文件在使用build.sh时自动生成。参考： https://github.com/jimmydong/YEPF3/tree/master/demo/QyRoot/yejs
		

6，以后台方式运行

	./start.sh 
	在 log/ 目录下查看日志

7，使用Scss+Gulp+BowserSync快速进行页面制作

    将待制作页面写入 dist/scss.html
    在src/scss下编写scss文件
    运行 gulp  (或运行 start.sh 以服务方式后台运行）
    在浏览器访问 http://yourhost:3080/scss.html
    修改scss.html或.scss文件，浏览器内容自动刷新
    
## 自动编译

目前仅支持 sass 和  index/index 的自动编译。

待改进： gulpfile.js  ， 分析文件目录结构和文件名称，定位需要编译的文件，进行自动编译

## 手工编译

参见： dist/page/build.sh

注意： 编译配置文件应与config.js保持一致 

## Router 规则

使用Router将多个功能页面整合入一个页面，提高运行速度，改善用户体验。

开发制作参见 dist/router.html 及 dist/page/下相关内容


## 文件名及目录结构约定

	全局相关
	gulpfile.js gulp自动编译配置文件
	package.json, proxy.sh, server.sh, start.sh, update.sh 辅助文件
	log/  日志文件目录
	src/scss SCSS源文件目录
	dist/ web访问根目录
	dist/lib 库文件目录
	dist/style 库CSS目录
	dist/image 图片文件目录
	
	
	项目开发
	dist/component 组件目录
	dist/css SCSS编译生成文件目录
	dist/[filename].html 主页面
	dist/page/[controller]/[action].js 主JS文件
	dist/page/[controller]/[action].html 主模板文件
	dist/page/[controller]/_[action]_profile.js 编译配置文件(如果自动编译，则不需要)
	dist/page/[controller]/_[action].js 主编译文件
	dist/page/[controller]/_[action]_build.js 编译结果文件
	dist/page/[controller]/_[action]/router.js 路由文件
	dist/page/[controller]/_[action]/*.js / *.html 路由附属文件
	
    
## YEJS 扩展工具

### js 扩展

wait ...

### vue 扩展

wait ...
