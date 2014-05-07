'use strict';

angular.module('ngPresentationApp')
  .factory('sourceCache', ['$cacheFactory', function($cacheFactory){
    var cache = $cacheFactory('source');
    return cache;
  }])
  .directive('source', function (sourceCache) {
    return {
      restrict: 'A',
      compile: function (element, scope) {
        sourceCache.put('source', element.html());
      }
    };
  })
  .directive('includeSource', function (sourceCache) {
    return {
      replace: true,
      restrict: 'EA',
      template: '<pre class="source"><code></code></pre>',
      scope: {},
      compile: function (element, attrs) {
        return function (scope, element, attrs) {
          element.find('code').html(
            hljs.highlight('html', sourceCache.get('source')).value
          )
        }
      }
    }
  });
