'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/referer', {
        templateUrl: 'app/referer/referer.html',
        controller: 'RefererCtrl'
      });
  });
