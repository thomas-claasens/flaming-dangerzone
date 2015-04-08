'use strict';

angular.module('shopApp')
  .directive('basket', function () {
    return {
      templateUrl: 'app/basket/basket.directive.html',
      restrict: 'E',
      scope: {
      	user : '='
      },
      link: function (scope, element, attrs) {
      	//console.log(scope);
      }
    };
  });