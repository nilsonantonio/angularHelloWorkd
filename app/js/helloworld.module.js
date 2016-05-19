(function(){
    'user strict';

    angular.module('helloworld.controller', []);
    angular.module('helloworld.service', []);
    angular.module('helloworld.factory', []);
    angular.module('helloworld.directive', []);
    angular.module('helloworld.filter', []);

    angular.module('helloworld',[
        'ngMessages',
        'toastr',
        'ui.grid',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'helloworld.controller',
        'helloworld.service',
        'helloworld.factory',
        'helloworld.directive',
        'helloworld.filter',
        'angular-keycode',
        'ui.bootstrap'
    ]);//declaração do module principal
})();