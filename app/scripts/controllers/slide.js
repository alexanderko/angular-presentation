'use strict';

angular.module('ngPresentationApp')
  .controller('SlideCtrl', function ($scope, $templateCache) {
    $scope.slides = [
      'two-way-data-binding.html',
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
  }])
  .controller('tasksController', ['$scope', function($scope) {

    $scope.tasks = [
      {
        title: "Потготовить слайды"
      }
    ]

    $scope.addTask = function () {
      $scope.tasks.push(angular.copy($scope.task));
      $scope.task.name = '';
    }
  }]);
