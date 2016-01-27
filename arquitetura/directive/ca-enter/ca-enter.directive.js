(function(){
    'use strict';

    angular.module('helloworld.directive').directive('caEnter', caEnter);

    /* @ngInject */
    function caEnter(KeyCode){
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.bind('keydown', onKeydown);

            function onKeydown(event) {
                var code = event.keyCode;

                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.caEnter);
                }
            }
        }
    }
})();