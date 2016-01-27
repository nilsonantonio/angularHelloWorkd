(function(){
    'use strict';


    angular.module('helloworld.directive').directive('caPanel', caPanel);

    /* @ngInject */
    function caPanel(){
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-panel/ca-panel.directive.html',
            transclude: {
                body: 'panelBody',
                footer: '?panelFooter'
            },
            scope: {
                titulo: '@',
                tipoClass: '@'
            },
            link: function(scope, element, attrs) {
                if(!attrs.tipoClass){
                    attrs.tipoClass = 'default';
                }
                scope.class = 'panel panel-' + attrs.tipoClass;
            }
        };
    }
})();