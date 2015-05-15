'use strict';

angular.module('manageThatBetter').config(['$routeProvider',
    function($routeProvider) {
        console.log($routeProvider)
        $routeProvider.
            when('/test', {
                redirectTo: function (a, b, c) {
                    console.log(a, b, c);
                }
            }).
            otherwise({
                redirectTo: function (a, b, c) {
                    console.log(a, b, c);
                }
            });
    }]);