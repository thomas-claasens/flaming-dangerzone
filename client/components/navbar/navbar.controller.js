'use strict';

angular.module('shopApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Orders',
      'link': '/order',
      'isAdmin': true
    }, {
      'title': 'Stock',
      'link': '/stock',
      'isAdmin': true
    }, {
      'title': 'Users',
      'link': '/admin',
      'isAdmin': true
    }, {
      'title': 'Categories',
      'link': '/category',
      'isAdmin': true
    }, {
      'title': 'Postage Bands',
      'link': '/postage',
      'isAdmin': true
    }, {
      'title': 'Postage Zones',
      'link': '/postzone',
      'isAdmin': true
    }, {
      'title': 'Reports',
      'link': '/report',
      'isAdmin': true
    }, {
      'title': 'Reviews',
      'link': '/review',
      'isAdmin': true
    }, {
      'title': 'Mailing List',
      'link': '/mailinglist',
      'isAdmin': true
    }, {
      'title': 'Hear from us?',
      'link': '/referer',
      'isAdmin': true
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });