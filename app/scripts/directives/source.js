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
      transclude: true,
      template: '<pre class="source"><code ng-transclude></code></pre>',
      scope: {},
      compile: function (element, attrs) {
        return function (scope, element, attrs) {
          var language = attrs.language || 'html';
          var codeElement = element.find('code');
          if (codeElement.html().trim()) {
            hljs.highlightBlock(codeElement[0]);
          } else {
            var code = hljs.highlight(language, sourceCache.get('source')).value;
            code = code.replace(/&amp;/g, '&');
            codeElement.html(code);
          }
        }
      }
    }
  });
