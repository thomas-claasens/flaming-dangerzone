'use strict';

describe('Directive: categoryContainer', function () {

  // load the directive's module and view
  beforeEach(module('shopApp'));
  beforeEach(module('app/categoryContainer/categoryContainer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<category-container></category-container>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the categoryContainer directive');
  }));
});