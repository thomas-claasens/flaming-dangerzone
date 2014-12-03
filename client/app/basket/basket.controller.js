'use strict';

angular.module('shopApp')
  .controller('BasketCtrl', function ($scope, Auth, $routeParams) {
  	$scope.currentUser = Auth.getCurrentUser();
    $scope.message = 'Hello';
    $scope.basketId = $routeParams.id;
  });
