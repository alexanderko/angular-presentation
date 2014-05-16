'use strict';

angular
  .module('ngPresentationApp', [
    'ngRoute',
    'ui.bootstrap.tabs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/slide', {
        templateUrl: 'views/slide.html',
        controller: 'SlideCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/slide'
      });
  });
