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
    var first = {name: 'first'};
    var second = {name: 'second'};
    var third = {name: 'third'};

    $scope.itemsFn = function () {
      return [
        first,
        second,
        third
      ];
    }

    $scope.items = $scope.itemsFn();
  }]);
