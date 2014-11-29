'use strict';

angular.module('shopApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mailinglist', {
        templateUrl: 'app/mailinglist/mailinglist.html',
        controller: 'MailinglistCtrl'
      });
  });
