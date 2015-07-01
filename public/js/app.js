"use strict";

var manageThatBetter = angular.module('manageThatBetter', ['users', 'ngMaterial', 'ngRoute', 'ngResource', 'rest']);

manageThatBetter.run(function ($rootScope) {
});

manageThatBetter.config(function($mdThemingProvider, $mdIconProvider){

	$mdIconProvider
		.defaultIconSet("public/assets/svg/avatars.svg", 128)
		.icon("menu"       , "public/assets/svg/menu.svg"        , 24)
		.icon("share"      , "public/assets/svg/share.svg"       , 24)
		.icon("google_plus", "public/assets/svg/google_plus.svg" , 512)
		.icon("hangouts"   , "public/assets/svg/hangouts.svg"    , 512)
		.icon("twitter"    , "public/assets/svg/twitter.svg"     , 512)
		.icon("phone"      , "public/assets/svg/phone.svg"       , 512);

	$mdThemingProvider.theme('default')
		.primaryPalette('blue')
		.accentPalette('red');

});
