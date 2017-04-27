/**
 * Created by Administrator on 2017/4/26.
 */
(function(){
    angular.module('app',['ui.router'])
    angular.module('app')
        .run(function($rootScope){
            $rootScope.active1 = "未开始";
            $rootScope.active2 = "已结束";
            $rootScope.active3 = "已总结";
            $rootScope.class1 = "bg-gray";
            $rootScope.class2 = "bg-blue";
        })
})();