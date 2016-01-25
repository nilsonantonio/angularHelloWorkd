(function () {
    'use strict';

    angular
        .module('helloworld.controller')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4() {
        var vm = this;
        vm.entidade = {};
    }

})();

