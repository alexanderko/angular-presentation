'use strict';

angular
  .module('ngPresentationApp', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slide', {
        templateUrl: 'views/slide.html',
        controller: 'SlideCtrl',
        reloadOnSearch: false
      })
      .when('/animate', {
          templateUrl: 'views/animate-slides.html',
          controller: 'AnimateCtrl',
          reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/slide'
      });
  });
