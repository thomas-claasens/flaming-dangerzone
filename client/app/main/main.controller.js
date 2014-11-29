'use strict';

angular.module('shopApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();

    //console.log($scope.isAdmin);
  });
