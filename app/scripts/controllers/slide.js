'use strict';

angular.module('ngPresentationApp')
  .controller('SlideCtrl', function ($scope, $templateCache) {
    $scope.slides = [
      'views/slides/one-dot-rule.html',
      'views/slides/ternary-operator.html'
    ];

    function addSlide(url, content) {
      $templateCache.put(url, content);
      $scope.slides.push(url);
    }

    addSlide('first', 'first template');
    addSlide('second', 'second template');
    addSlide('third', 'third template');

  });
