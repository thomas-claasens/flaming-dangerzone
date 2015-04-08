'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stock', {
        templateUrl: 'app/stock/stock.html',
        controller: 'StockCtrl'
      });
  });
