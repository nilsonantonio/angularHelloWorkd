(function () {
    'use strict';

    angular
        .module('helloworld.controller')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4(AlertService) {
        var vm = this;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;
        vm.funcaoEnter = funcaoEnter;

        function salvar() {
            AlertService.showSucess('Salvou com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            AlertService.showSucess('Excluiu com sucesso!');
        }

        function funcaoEnter(){
            AlertService.showSucess('Disparou com o enter!');
        }
    }
})();

