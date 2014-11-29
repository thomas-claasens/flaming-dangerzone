'use strict';

describe('Controller: PostzoneCtrl', function () {

  // load the controller's module
  beforeEach(module('shopApp'));

  var PostzoneCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostzoneCtrl = $controller('PostzoneCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
