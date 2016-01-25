(function(){
    'use strict';

    angular.module('helloworld.directive').directive('caInputText', caInputText);

    function caInputText(){
        return {
            require: ['ngModel'],
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-input-text/ca-input-text.directive.html',
            scope: {
                label: '@',
                colspan: '@',
                ngModel: '=',
                ngRequired: '=?'
            },
            link: function(scope, element, attrs) {
                scope.myColspan = 'col-sm-' + attrs.colspan;
            }
        };
    }
})();