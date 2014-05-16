'use strict';

angular.module('ngPresentationApp')
    .controller('AnimateCtrl', function ($scope) {
        $scope.slides = [
            'intro.html',
            'ng-repeat.html'
        ];

        $scope.names=['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi'];

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
