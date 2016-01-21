(function () {
    'use strict';

    angular.module('helloworld').controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$timeout', 'AlertService', '$filter'];

    function MessagesController($timeout, AlertService, $filter){
        var vm = this;
        vm.listaDePessoas = [];
        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;

        vm.ultimaDataCadastrada = '';

        function salvar() {
            setarTouchedNosInputs();

            if(vm.formPessoa.$invalid === true) {
                AlertService.showErro('Verifique o preenchimento dos campos', 'Erro');
                return;
            }

            var data = vm.entidade.nascimento;
            vm.ultimaDataCadastrada = $filter('date') (data, 'dd/MM/yyyy');

            vm.listaDePessoas.push(vm.entidade);

            AlertService.showSucess('Registro salvo com sucesso!', 'Ok');

            limpar();
        }

        function limpar() {
            vm.entidade = {};

            $timeout(function(){
                setarUnTouchedNosInputs();
            }, 100);
        }

        function setarTouchedNosInputs(){
            angular.forEach(vm.formPessoa.$error, function(error, keyError) {
                angular.forEach(error, function(field, keyField){
                    field.$setTouched();
                });
            });
            AlertService.showInfo('Campos validados!', 'INFO!');
        }

        function setarUnTouchedNosInputs(){
            angular.forEach(vm.formPessoa.$error, function(error) {
                angular.forEach(error, function(field){
                    field.$setUntouched();
                });
            });
            AlertService.showWarning('Campos limpos!', 'WARN!');
        }
    }
})();