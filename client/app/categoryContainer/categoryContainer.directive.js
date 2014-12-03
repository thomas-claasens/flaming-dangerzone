'use strict';

angular.module('shopApp')
  .directive('categoryContainer', function () {
    return {
      templateUrl: 'app/categoryContainer/categoryContainer.html',
      restrict: 'E',
      scope: { 
      	user: '='
      },
      link: function (scope, element, attrs) {
        //console.log(scope);
      }
    };
  });