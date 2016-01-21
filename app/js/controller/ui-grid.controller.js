(function () {
    'use strict';

    angular.module('helloworld').controller('UIGridController', UIGridController);

    /* @ngInject */
    function UIGridController($timeout, AlertService, $filter, $rootScope, $state) {
        var vm = this;
        vm.listaDePessoas = [];
        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.onClickEditar = onClickEditar;
        vm.getRowStyle = getRowStyle;

        vm.ultimaDataCadastrada = '';

        iniciar();

        function iniciar() {
            vm.gridOptions = {
                data: 'listaDePessoas',
                columnDefs: [
                    {field: 'nome', displayName: 'Nome', width: 200},
                    {field: 'sobrenome', displayName: 'Sobrenome'},
                    {
                        field: 'nascimento', displayName: 'Data nascimento',
                        width: 150, cellTemplate: 'app/template/cell-template-date.html'
                    },
                    {
                        field: 'acao', displayName: 'Ações',
                        width: 150, cellTemplate: 'app/template/cell-template-acao.html'
                    }
                ],
                rowTemplate: 'app/template/row-template.html'
            };
        }

        function salvar() {
            setarTouchedNosInputs();

            if (vm.formPessoa.$invalid === true) {
                AlertService.showErro('Verifique o preenchimento dos campos', 'Erro');
                return;
            }

            var data = vm.entidade.nascimento;
            vm.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

            vm.listaDePessoas.push(vm.entidade);

            AlertService.showSucess('Registro salvo com sucesso!', 'Ok');

            limpar();
        }

        function limpar() {
            vm.entidade = {};

            $timeout(function () {
                setarUnTouchedNosInputs();
            }, 100);
        }

        function setarTouchedNosInputs() {
            angular.forEach(vm.formPessoa.$error, function (error, keyError) {
                angular.forEach(error, function (field, keyField) {
                    field.$setTouched();
                });
            });
            AlertService.showInfo('Campos validados!', 'INFO!');
        }

        function setarUnTouchedNosInputs() {
            angular.forEach(vm.formPessoa.$error, function (error) {
                angular.forEach(error, function (field) {
                    field.$setUntouched();
                });
            });
            AlertService.showWarning('Campos limpos!', 'WARN!');
        }

        function onClickEditar(linhaSelecionada) {
            vm.entidade = linhaSelecionada;
        }

        function getRowStyle(linhaSelecionada) {
            var style = {};
            style.backgroundColor = linhaSelecionada.cor;
            style.color = 'white';
            return style;
        }

        vm.dispararEvento = function () {
            $rootScope.$broadcast('testeBroadcastEvent', {nome: 'Nilson'});
        };

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateNotFound', stateNotFound);

        function stateChangeStart(event, toState, toParams, fromState, fromParams) {
            if (toState.name === 'pesquisaPessoa') {
                AlertService.showErro('Você não possui permissão para acessar esta tela' + toState.name);

                event.preventDefault();
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            AlertService.showSucess('Carregou estado' + toState.name + ' com sucesso');
        }

        function stateNotFound(event, unfoundState, fromState, fromParams) {
            AlertService.showErro('Esta página nao existe');

            $state.go('home');
        }
    }
})();