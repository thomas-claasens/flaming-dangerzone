'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        templateUrl: 'app/review/review.html',
        controller: 'ReviewCtrl'
      });
  });
