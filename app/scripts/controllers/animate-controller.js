'use strict';

angular.module('ngPresentationApp')
    .controller('AnimateCtrl', function ($scope) {
        $scope.slides = [
            'intro.html',
            'ng-repeat.html',
            'ng-view.html'
        ];

        $scope.names=['Foo', 'Bar', 'Baz', 'John Doe', 'John Smith', 'Jane Doe', 'John Scott'];

        $scope.addRepeatItem = function(item) {
            $scope.repeatItems.push(item);
        }

    })
    .controller('itemsController', ['$scope', function($scope) {

        $scope.itemsFn = function () {
            return [
                {name: 'first'},
                {name: 'second'},
                {name: 'third'}
            ];
        };

        $scope.repeatItems = $scope.itemsFn();
    }]);
