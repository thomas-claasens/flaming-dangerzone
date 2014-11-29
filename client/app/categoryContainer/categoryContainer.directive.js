'use strict';

angular.module('shopApp')
  .directive('categoryContainer', function () {
    return {
      templateUrl: 'app/categoryContainer/categoryContainer.html',
      restrict: 'EA',
      scope: { 
      	user: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });