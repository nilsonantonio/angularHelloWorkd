(function () {
    'use strict';

    angular
        .module('helloworld.controller')
        .controller('IndexController5', IndexController5);

    /* @ngInject */
    function IndexController5($http, AlertService) {
        var vm = this;
        vm.carregarListaDeDados = carregarListaDeDados;
        vm.listaDeDados = [];

        vm.gridOptions = {
            data: 'vmIndex.listaDeDados'
        };

        function carregarListaDeDados() {
            var promise = $http.get('http://jsonplaceholder.typicode.com/posts/');

            promise.then(carregarResult, carregarFault);

            function carregarResult(response) {
                vm.listaDeDados = response.data;
            }

            function carregarFault(rejection) {
                AlertService.showErro('Erro url');
            }
        }
    }
})();

