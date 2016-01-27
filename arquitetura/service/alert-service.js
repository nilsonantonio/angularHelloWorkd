(function() {
    'use strict';

    angular.module('helloworld').service('AlertService', AlertService);


    /* @ngInject */
    function AlertService(toastr) {

        this.showSucess = showSucess;
        this.showErro = showErro;
        this.showInfo = showInfo;
        this.showWarning = showWarning;
        var configuracao = {progressBar : true, closeButton: true};

        function showSucess(mensagem, titulo) {
            if(!titulo) {
                titulo = 'OK';
            }

            toastr.success(mensagem, titulo, configuracao);
        }

        function showErro(mensagem, titulo) {
            if(!titulo) {
                titulo = 'OK';
            }

            toastr.error(mensagem, titulo, configuracao);
        }

        function showInfo(mensagem, titulo) {
            if(!titulo) {
                titulo = 'OK';
            }

            toastr.info(mensagem, titulo, configuracao);
        }

        function showWarning(mensagem, titulo) {
            if(!titulo) {
                titulo = 'OK';
            }

            toastr.warning(mensagem, titulo, configuracao);
        }
    }

})();
