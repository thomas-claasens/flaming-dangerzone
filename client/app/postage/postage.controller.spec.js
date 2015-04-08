'use strict';

describe('Controller: PostageCtrl', function () {

  // load the controller's module
  beforeEach(module('shopApp'));

  var PostageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostageCtrl = $controller('PostageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
