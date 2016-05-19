(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @name delta.directive:caInputText
     * @element ca-input-text
     * @scope
     * @restrict E
     *
     * @description
     * Componente padrão de input text
     *
     * @param {string} label Texto a ser exibido na parte superior do input
     * @param {number} colspan Quantidade de colunas que o input ocupara. Default: 3
     * @param {object} ng-model Referência do input
     * @param {boolean} ng-required Informa se o campo é obrigatório ou não. Default:false
     **/

    angular.module('helloworld.directive').directive('caInputText', caInputText);

    function caInputText(){
        return {
            require: ['^form', 'ngModel'],
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-input-text/ca-input-text.directive.html',
            scope: {
                label: '@',
                colspan: '@',
                ngModel: '=',
                ngRequired: '=?',
                ngMaxlength: '@',
                ngMinlength: '@'
            },
            link: link
        };

        function link(scope, element, attrs, requires) {
            scope.formControl = requires[0];
            scope.inputName = 'inputText'+scope.$id;

            if(!attrs.colspan){
                attrs.colspan = 3;
            }

            scope.myColspan = 'col-sm-' + attrs.colspan;
        }
    }
})();