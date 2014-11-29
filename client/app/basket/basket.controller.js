'use strict';

angular.module('shopApp')
  .controller('BasketCtrl', function ($scope, Auth) {
  	$scope.currentUser = Auth.getCurrentUser();
    $scope.message = 'Hello';
  });
