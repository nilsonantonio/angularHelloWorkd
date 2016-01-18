angular.module('helloworld').controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope'];

function IndexController2($scope){
    $scope.nome = 'Nilson';
    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, antigoValor) {
        if(novoValor === antigoValor) {
            return ;
        }

        if(novoValor === 'helloworld') {
            $scope.myStyle.backgroundColor = 'red';
        } else {
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
}
