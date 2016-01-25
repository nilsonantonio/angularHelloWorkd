(function(){
    'use strict';

    angular.module('helloworld.directive').directive('caSpan', caSpan);

    function caSpan(){
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-span/ca-span.directive.html',
            scope: {
                texto: '@'
            },
            link: function($scope, element, attrs) {

            }
        };
    }
})();