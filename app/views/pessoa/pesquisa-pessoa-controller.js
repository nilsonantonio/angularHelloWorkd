angular.module('helloworld').controller('PesquisaPessoaController', PesquisaPessoaController);

PesquisaPessoaController.$inject = ['$scope'];

function PesquisaPessoaController($scope) {
    $scope.nome = 'Pesquisa Pessoa Controller';
}