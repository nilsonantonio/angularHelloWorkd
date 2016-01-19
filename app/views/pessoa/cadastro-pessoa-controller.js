angular.module('helloworld').controller('CadastroPessoaController', CadastroPessoaController);

CadastroPessoaController.$inject = ['$scope'];

function CadastroPessoaController($scope) {
    $scope.nome = 'Cadastro Pessoa Controller';
}