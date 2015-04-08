'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/country', {
        templateUrl: 'app/country/country.html',
        controller: 'CountryCtrl'
      });
  });
