'use strict';

describe('Directive: source', function () {

  // load the directive's module
  beforeEach(module('ngPresentationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<source></source>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the source directive');
  }));
});
