"use strict";

var manageThatBetter = angular.module('manageThatBetter', ['ngRoute', 'ngResource', 'ui.select2', 'rest']);

manageThatBetter.run(function ($rootScope) {
	$rootScope.Modernizr = Modernizr;
});
