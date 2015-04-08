'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/report', {
        templateUrl: 'app/report/report.html',
        controller: 'ReportCtrl'
      });
  });
