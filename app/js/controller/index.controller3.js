(function(){
    'use strict';

    angular.module('helloworld').controller('IndexController3', IndexController3);

    /* @ngInject */
    function IndexController3(){
        var vm = this;
        vm.listaDePessoas = [];
        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;

        function salvar() {
            vm.listaDePessoas.push(vm.entidade);

            limpar();
        }

        function limpar() {
            vm.entidade = {};
        }
    }
})();

