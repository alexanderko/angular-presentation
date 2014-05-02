'use strict';

angular.module('ngPresentationApp')
  .directive('slideshow', function () {
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

        var currentIndex = 0;

        function isFirstSlide() {
          return currentIndex == 0;
        }

        function isLastSlide() {
          return currentIndex == scope.slides.length - 1;
        }

        scope.prevSlide = function () {
          if (isFirstSlide()) return;
          currentIndex--;
        }

        scope.nextSlide = function () {
          if (isLastSlide()) return;
          currentIndex++;
        }

        scope.currentSlideUrl = function () {
          return scope.slides[currentIndex];
        }
      }
    };
  });
