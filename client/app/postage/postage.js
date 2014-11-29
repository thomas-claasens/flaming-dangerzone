'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/postage', {
        templateUrl: 'app/postage/postage.html',
        controller: 'PostageCtrl'
      });
  });
