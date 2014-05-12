'use strict';

angular.module('ngPresentationApp')
  .controller('SlideCtrl', function ($scope, $templateCache) {
    $scope.slides = [
      'one-dot-rule.html',
      'ternary-operator.html',
      'array-in-expression.html'
    ];
  })
  .controller('itemsController', ['$scope', function($scope) {

    $scope.itemsFn = function () {
      return [
        {name: 'first'},
        {name: 'second'},
        {name: 'third'}
      ];
    }

    $scope.items = $scope.itemsFn();
  }]);
