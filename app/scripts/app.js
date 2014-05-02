'use strict';

angular
  .module('ngPresentationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slide', {
        templateUrl: 'views/slide.html',
        controller: 'SlideCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
