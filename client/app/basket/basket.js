'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/basket', {
        templateUrl: 'app/basket/basket.html',
        controller: 'BasketCtrl'
      });
  });
