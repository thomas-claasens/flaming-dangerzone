'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/order', {
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      });
  });
