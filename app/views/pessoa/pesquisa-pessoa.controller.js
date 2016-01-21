(function () {
    'use strict';

    angular.module('helloworld').controller('PesquisaPessoaController', PesquisaPessoaController);

    /* @ngInject */
    function PesquisaPessoaController($state) {
        var vm = this;
        vm.nome = 'Pesquisa Pessoa Controller';
        vm.redirecionarParaCadastro = redirecionarParaCadastro;

        function redirecionarParaCadastro() {
            $state.go('cadastroPessoa', {id: 15, nome: 'teste'});
        }
    }
})();