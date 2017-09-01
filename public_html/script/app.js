(function () {
    'use strict';
    angular.module('app', ['ui.router'])
            .constant('HOME', 'app.home')
            // .constant('API_URL', 'https://birriassoccer.com/equilatero/api/public/api')
            .constant('API_URL', 'http://localhost/cleanly/api/public/index.php/api')
            .config(function ($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {
                $compileProvider.debugInfoEnabled(false);
                $urlRouterProvider.otherwise('/');
                $stateProvider
                        .state('app', {
                            url: '',
                            abstract: true,
                            templateUrl: 'view/template.html'
                        })
                        .state('app.home', {
                            url: '/',
                            templateUrl: 'view/home.html',
                            // controller: 'HomeController as vm'
                        });
                $locationProvider.html5Mode(true);
            });
})();

angular.module('app').filter('trusted', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

