(function(){
    'use strict';

    angular.module('helloworld.directive').directive('caCrud', caCrud);

    /* @ngInject */
    function caCrud(){
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-crud/ca-crud.directive.html',
            transclude: true,
            scope: {
                titulo: '@',
                salvar: '&',
                excluir: '&',
                limpar: '&'
            },
            link: function(scope, element, attrs) {
            }
        };
    }
})();