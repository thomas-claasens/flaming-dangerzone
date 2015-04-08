'use strict';

describe('Controller: RefererCtrl', function () {

  // load the controller's module
  beforeEach(module('shopApp'));

  var RefererCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RefererCtrl = $controller('RefererCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
