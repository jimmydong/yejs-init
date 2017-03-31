define(function(require){
    var Vue = require("vue");
    var VueRouter = require("vuerouter");

    Vue.use(VueRouter);

    /**
     * 路由定义
     */
    const routes = [
      {
        path: "/home", 
        component: require("page/index/router/pageHome")
      },
      {
        path: "/user", 
        component: require("page/index/router/userAdd")
      },
      {
        path: "/user/:id", 
        component: require("page/index/router/userDetail")
      },
      {
        path: "/post", 
        component: require("page/index/router/pageSub")
      },
      {
        path: "/setting", 
        component: require("page/index/router/pageSub")
      },
      {
        path: "/about", 
        component: require("page/index/router/pageSub")
      },
      {
        path: "*",
        component: require("page/index/router/pageHome")
      }
    ];

    const router = new VueRouter({
      routes: routes
    });

    return router;

});