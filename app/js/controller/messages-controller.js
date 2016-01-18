angular.module('helloworld').controller('MessagesController', MessagesController);

MessagesController.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function MessagesController($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    $scope.ultimaDataCadastrada = '';

    function salvar() {
        setarTouchedNosInputs();

        if($scope.formPessoa.$invalid === true) {
            AlertService.showErro('Verifique o preenchimento dos campos', 'Erro');
            return;
        }

        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date') (data, 'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);

        AlertService.showSucess('Registro salvo com sucesso!', 'Ok');

        limpar();
    }

    function limpar() {
        $scope.entidade = {};

        $timeout(function(){
           setarUnTouchedNosInputs();
        }, 100);
    }

    function setarTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error, keyError) {
            angular.forEach(error, function(field, keyField){
                field.$setTouched();
            });
        });
        AlertService.showInfo('Campos validados!', 'INFO!');
    }

    function setarUnTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error) {
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
        AlertService.showWarning('Campos limpos!', 'WARN!');
    }
}
