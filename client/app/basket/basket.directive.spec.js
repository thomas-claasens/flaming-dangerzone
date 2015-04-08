'use strict';

describe('Directive: basket', function () {

  // load the directive's module and view
  beforeEach(module('shopApp'));
  beforeEach(module('app/basket/basket.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<basket></basket>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the basket directive');
  }));
});