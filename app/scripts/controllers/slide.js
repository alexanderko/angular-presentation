'use strict';

angular.module('ngPresentationApp')
  .controller('SlideCtrl', function ($scope, $templateCache) {
    $scope.slides = [
      'two-way-data-binding.html',
      'controllers.html',
      'filters.html',
      'directives.html',
      'directives-for-regular-tags.html',
      'one-dot-rule.html',
      'ternary-operator.html',
      'array-in-expression.html',
      'no-reload.html'
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
  .controller('taskController', ['$scope', function($scope) {

    $scope.tasks = [
      {
        title: "Потготовить слайды"
      }
    ]

    $scope.addTask = function () {
      if ($scope.task.title.trim()) {
        $scope.tasks.push(angular.copy($scope.task));
        $scope.task.title = '';
      }
    }
  }])
  .controller('timeController', ['$scope', '$timeout', 'dateFilter', function($scope, $timeout, dateFilter) {
    function updateTime() {
      $scope.timeNow = new Date();
      $timeout(updateTime, 1000);
    }
    updateTime();
    $scope.showDate = function () {
      $scope.formattedDate = dateFilter(new Date(), $scope.format);
    }
  }]);
