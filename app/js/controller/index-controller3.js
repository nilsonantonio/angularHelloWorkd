angular.module('helloworld').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope'];

function IndexController3($scope){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar() {
        $scope.listaDePessoas.push($scope.entidade);

        limpar();
    }

    function limpar() {
        $scope.entidade = {};
    }
}
