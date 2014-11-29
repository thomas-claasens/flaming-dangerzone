'use strict';

angular.module('shopApp')
  .directive('basket', function () {
    return {
      templateUrl: 'app/basket/basket.directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });