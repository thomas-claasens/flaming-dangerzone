'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/shop/:id/basket', {
        templateUrl: 'app/basket/basket.html',
        controller: 'BasketCtrl'
      });
  });
