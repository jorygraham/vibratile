"use strict";angular.module("vibratileApp",["ngCookies","ngResource","ngSanitize","ngRoute","uiSlider"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("vibratileApp").controller("MainCtrl",["$scope","$document","$interval","$window",function(a,b,c,d){var e,f=["<^.^>","{^.^>","{^.^}","<^.^}"],g=0,h=function(){4==g&&(g=0),b.attr("title",f[g++]),d.navigator.vibrate(a.purrLength)};a.isPurring=!1,a.purrLength=150,a.purrDelay=450,a.startPurring=function(){a.isPurring=!0,e=c(h,a.purrDelay)},a.stopPurring=function(){a.isPurring=!1,g=0,b.attr("title","(^_^)"),c.cancel(e)},a.$watch("purrDelay",function(){a.isPurring&&(c.cancel(e),e=c(h,a.purrDelay))})}]);