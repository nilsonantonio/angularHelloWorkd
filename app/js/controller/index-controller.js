angular.module('helloworld').controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope){
    $scope.nome = 'Nilson';
    $scope.testeFuncao = testeFuncao;

    function testeFuncao(){
        alert('Olá ' + $scope.nome);
    }
}
