angular.module('helloworld').controller('UIGridController', UIGridController);

UIGridController.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function UIGridController($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;

    $scope.ultimaDataCadastrada = '';

    iniciar();

    function iniciar() {
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs: [
                {field: 'nome', displayName: 'Nome', width:200},
                {field: 'sobrenome', displayName: 'Sobrenome'},
                {field: 'nascimento', displayName: 'Data nascimento', width:150, cellTemplate: 'app/template/cell-template-date.html'},
                {field: 'acao', displayName: 'Ações', width:150, cellTemplate: 'app/template/cell-template-acao.html'}
            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

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

    function onClickEditar(linhaSelecionada) {
        $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada) {
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }
}
