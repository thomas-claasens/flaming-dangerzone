'use strict';

angular.module('core').directive('people', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// People directive logic
				// ...

				element.text('this is the people directive');
			}
		};
	}
]);