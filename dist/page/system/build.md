# 编译说明

目的： 正式上线版本如果因为加载组件过多导致速度变慢，可以采用编译方式，将组件编译到一个文件中，加快加载速度。

方法：

1， 改造template

	require(["vue", pageUrl, "museui"], function(Vue, app, museui){
		...
	});
	
	替换为：
	
	<script src="/yejs/page/<{$_c}>/<{$_a}>_build.js></script>

2， 新建 {_c}/_{_a}.js ， 将上文中 JS 部分填写进去。注意：需要将 pageUrl 替换为实际的 js 文件名

3， 新建 {_c}/_{_a}_profile.js ， 填写 paths 、 name 、 out 。 注意：out 应为： {_a}_build.js ，否则应修改步骤1中引用地址

4， 调用 ./build.sh {_c} {_a}

示例：  ./build.sh index index



