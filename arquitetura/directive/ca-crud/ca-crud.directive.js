(function(){
    'use strict';

    angular.module('helloworld.directive').directive('caCrud', caCrud);

    /* @ngInject */
    function caCrud(AlertService, $timeout){
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
            link: link
        };

        function link(scope, element, attrs) {
            scope.onSalvar = onSalvar;
            scope.onLimpar = onLimpar;

            function onSalvar() {
                setarTouchedNosInputs();

                if (scope.caFormCrud.$invalid === true) {
                    AlertService.showErro('Verifique o preenchimento dos campos', 'Erro');
                    return;
                }

                scope.salvar();
            }

            function onLimpar() {
                scope.limpar();
                setarUnTouchedNosInputs();
            }

            function setarTouchedNosInputs() {
                angular.forEach(scope.caFormCrud.$error, function (error, keyError) {
                    angular.forEach(error, function (field, keyField) {
                        field.$setTouched();
                    });
                });
            }

            function setarUnTouchedNosInputs() {
                angular.forEach(scope.caFormCrud.$error, function (error) {
                    angular.forEach(error, function (field) {
                        field.$setUntouched();
                    });
                });
            }
        }
    }
})();