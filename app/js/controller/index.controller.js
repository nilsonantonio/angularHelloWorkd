(function(){
    'use strict';

    angular.module('helloworld.controller').controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController(AlertService){
        var vm = this;
        vm.nome = 'Nilson';
        vm.testeFuncao = testeFuncao;

        function testeFuncao(){
            AlertService.showSucess('Olá ' + vm.nome);
        }
    }
})();
