(function () {
    'use strict';

    angular.module('helloworld').controller('CadastroPessoaController', CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController($scope, $stateParams, $state) {
        var vm = this;
        vm.nome = 'Cadastro Pessoa Controller';

        var meuId = $stateParams.id;

        $scope.$on('testeBroadcastEvent', function (event, param) {
            var event2 = event;
            $state.go('stateNaoExiste');
        });
    }
})();