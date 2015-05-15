angular.module("manageThatBetter").directive("menu", function ($rootScope) {
	return {
		restrict: 'E', //E = element, A = attribute, C = class, M = comment
		template: '<i class="icon-menu2 align-right" />',
		replace: true,
		link: function ($scope, element, attrs) {

		} //DOM manipulation
	}
});