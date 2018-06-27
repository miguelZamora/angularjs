/*'use strict';
angular.module('sitwar',['ngRoute','ngResource','validation.match','chieffancypants.loadingBar', 'ngAnimate', 'ui.bootstrap','ngDragDrop'])
  .config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.htm

  */      


'use strict';
angular.module(['app'],['ngRoute','ngResource','angular-websql'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'DetailHomeController'})
      .when('/Educacion',{templateUrl:'views/Educacion/detail.html',controller:'DetailEducacionController'})
      .when('/Proyectos',{templateUrl:'views/Proyectos/detail.html',controller:'DetailProyectosController'})
      

      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function ($scope, $routeParams, $location, flash,  $rootScope ) {

  
        })
  
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
 