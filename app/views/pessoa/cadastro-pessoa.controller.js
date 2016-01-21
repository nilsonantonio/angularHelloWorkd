(function () {
    'use strict';

    angular.module('helloworld').controller('CadastroPessoaController', CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope', '$stateParams', '$state'];

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