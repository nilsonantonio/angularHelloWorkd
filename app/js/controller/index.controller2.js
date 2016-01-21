(function () {
    'use strict';

    angular.module('helloworld').controller('IndexController2', IndexController2);

    function IndexController2(){
        var vm = this;
        vm.nome = 'Nilson';
        vm.myStyle = {};

        vm.$watch('nome', onChangeNome);

        function onChangeNome(novoValor, antigoValor) {
            if(novoValor === antigoValor) {
                return ;
            }

            if(novoValor === 'helloworld') {
                vm.myStyle.backgroundColor = 'red';
            } else {
                vm.myStyle.backgroundColor = 'blue';
            }
        }
    }
})();