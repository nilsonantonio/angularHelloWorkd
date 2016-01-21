(function(){
    'use strict';

    angular.module('helloworld').controller('IndexController', IndexController);

    function IndexController(){
        var vm = this;
        vm.nome = 'Nilson';
        vm.testeFuncao = testeFuncao;

        function testeFuncao(){
            alert('Olá ' + vm.nome);
        }
    }
})();
