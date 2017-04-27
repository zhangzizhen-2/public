/**
 * Created by Administrator on 2017/4/26.
 */
(function(){
    angular.module('app')
        .config(function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise("/mass");
            $stateProvider
                .state({
                    name:"home",
                    url: "/home",
                    template: "这是首页"
                })
                .state({
                    name:"mass",
                    url: "/mass",
                    templateUrl: "page/mass.html",
                    controller: function($rootScope,$http){
                        $http.get("data/package.json")
                            .then(function(list){
                                $rootScope.list = list.data
                            })
                    }
                })
                .state({
                    name:"mass.info",
                    url: "/info",
                    templateUrl: "page/info.html",
                    controller: function($rootScope,$http){
                        $http.get("data/birth.json")
                            .then(function(data){
                                //console.log(data.data)
                                $rootScope.data = data.data
                            })
                    }
                })
                .state({
                    name:"mass.start",
                    url: "/start",
                    templateUrl: "page/start.html",
                    controller: function($rootScope,$state){
                        $rootScope.go = function(){
                            $state.go("mass.info");
                        }
                        //$rootScope.sends = function(num){
                        //    alert(1)
                        //    var str = '<li ng-repeat="i in list">'+
                        //            '<p class="left">'+
                        //            '<span class="name">赵大妈</span>:'+
                        //            '<span class="content">'+num+'</span>'+
                        //            '</p><p class="right">'+
                        //                '<span class="times">2017-04-27</span>'+
                        //        '<span class="reply">回复</span></p></li>';
                        //    var li = $(str).appendTo($('#comment'))
                        //}
                    }
                })
                .state({
                    name:"mass.begin",
                    url: "/begin",
                    templateUrl: "page/begin.html"
                })
                .state({
                    name:"mass.end",
                    url: "/end",
                    templateUrl: "page/end.html"
                })
                .state({
                    name:"party",
                    url: "/party",
                    template: "这是党组织活动服务"
                })
                .state({
                    name:"inmate",
                    url: "/inmate",
                    template: "这是居民自治活动服务"
                })

        })
        .directive("inputFile",function(){
                return {
                    template: '<div class="input-file">'+
                                    '<label for="{{id}}"></label>'+
                                    ' <input type="file" name="" id="{{id}}">'+
                               '</div>',
                    restrict:"E",
                    scope: {},
                    controller: function ($scope) {
                        $scope.id = "inputFile" + $scope.$id;
                    },
                    link: function (scope, ele, attr) {
                        var inputfile = ele.find('div')
                        var input = $(inputfile).find("input");
                        input.on("change", function () {
                            var reader = new FileReader();
                            reader.readAsDataURL(this.files[0]);
                            reader.onload = function () {
                                console.log($(inputfile).find('label'))
                                $(inputfile).find('label')[0].style.background = "url(" + this.result + ") no-repeat center center ";
                            }
                        })
                    }
                }
        })
        .directive("activeLists",function(){
            return {
                template: '<div class="active-list">'+
                            ' <div class="list-top">'+
                                ' <div class="state {{n}}">'+
                                    ' <span class="state-text">{{activecont}}</span>'+
                                ' </div>'+
                                ' <div class="state-no">'+
                                ' </div>'+
                            ' </div>'+
                            '<div class="list-bottom">'+
                                '<p class="title">{{name}}</p>'+
                                '<p class="cont">'+
                                    '<span class="birth-date">{{time}}</span>'+
                                    '<span class="birth-place">{{address}}</span>'+
                                '</p>'+
                            '</div>'+
                        '</div>',
                restrict:"E",
                scope: {
                    activecont:"=",
                    n:"="
                },
                controller: function ($scope) {
                    $scope.name = "春暖花开社区生日会";
                    $scope.time = "2017年3月21日";
                    $scope.address = "三鑫社区11号楼2门301";

                },
                link: function (scope, ele, attr) {
                    $.ajax({
                        url: 'data/birth.json',
                        success: function(data){

                        }
                    })
                }
            }
        })

})();