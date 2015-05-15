/**
 * boxlayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

angular.module("manageThatBetter").directive("boxLayout", function ($rootScope) {
	return {
		restrict: 'A', //E = element, A = attribute, C = class, M = comment
		link: function ($scope, element, attrs) {
			var sections = element.find("section");
			console.log(sections)
			var section = element,
			transEndEventNames = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'msTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			},

			transEndEventName = transEndEventNames[ $rootScope.Modernizr.prefixed( 'transition' ) ];

			angular.forEach(sections, function (sectionElement) {
				var wrappedSectionElement = angular.element(sectionElement);
				wrappedSectionElement.bind("click", function () {
					element.addClass("bl-expand-item");
					wrappedSectionElement.addClass("bl-expand bl-expand-top");
				});
				var wrappedSectionCloseIcon = angular.element(sectionElement.querySelector(".icon-close"));
				wrappedSectionCloseIcon.bind("click", function (event) {
					event.stopPropagation();
					wrappedSectionElement.removeClass("bl-expand");
					element.removeClass("bl-expand-item");
					$scope.$on(transEndEventName, function () {
						wrappedSectionElement.removeClass("bl-expand-top");
					})
				})
			});
		} //DOM manipulation
	}
});