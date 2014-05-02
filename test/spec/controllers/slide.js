'use strict';

describe('Controller: SlideCtrl', function () {

  // load the controller's module
  beforeEach(module('ngPresentationApp'));

  var SlideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlideCtrl = $controller('SlideCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
