'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/postzone', {
        templateUrl: 'app/postzone/postzone.html',
        controller: 'PostzoneCtrl'
      });
  });
