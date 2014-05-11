'use strict';

angular.module('ngPresentationApp')
  .directive('slideshow', function ($location) {
    return {
      templateUrl: 'views/slideshow.html',
      restrict: 'E',
      scope: {
        slides: '='
      },
      link: function postLink(scope, element, attrs) {
        var d = angular.element(document);
        var keydownHandler = function (event) {
          if (event.target.nodeName.match(/input/i))
            return;
          scope.$apply(function() {
            switch (event.which) {
              case 37: scope.prevSlide(); break;
              case 39: scope.nextSlide(); break;
              default: break;
            }
          });
        };
        d.on('keydown', keydownHandler);

        scope.$on('$destroy', function () {
          d.off('keydown', keydownHandler);
        });

        var slide = $location.search().slide;
        var currentIndex = scope.slides.indexOf(slide);
        if (currentIndex == -1) {
          currentIndex = 0;
          updateLocation();
        }

        function isFirstSlide() {
          return currentIndex == 0;
        }

        function isLastSlide() {
          return currentIndex == scope.slides.length - 1;
        }

        function updateLocation() {
          $location.search({slide: currentSlide()});
        }

        function currentSlide () {
          return scope.slides[currentIndex];
        }

        scope.prevSlide = function () {
          if (isFirstSlide()) return;
          currentIndex--;
          updateLocation();
        }

        scope.nextSlide = function () {
          if (isLastSlide()) return;
          currentIndex++;
          updateLocation();
        }

        scope.currentSlideUrl = function () {
          return attrs.basePath + currentSlide();
        }
      }
    };
  });
