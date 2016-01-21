(function () {
    'use strict';

    angular.module('helloworld').factory('ParametrosAplicacao', ParametrosAplicacao);

    function ParametrosAplicacao() {
        return {
            nomeDoUsuario: '',
            email: '',
            logado: false
        };
    }
})();
