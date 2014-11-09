'use strict';

/**
 * @ngdoc overview
 * @name memoriaGraficaApp
 * @description
 * # memoriaGraficaApp
 *
 * Main module of the application.
 */
angular
  .module('memoriaGraficaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/memoriagrafica.html',
        controller: 'MemoriagraficaCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/memoriaGrafica', {
        templateUrl: 'views/memoriagrafica.html',
        controller: 'MemoriagraficaCtrl'
      })
      .when('/memoriaVideos', {
        templateUrl: 'views/memoriavideos.html',
        controller: 'MemoriavideosCtrl'
      })
      .when('/lugaresDeInteres', {
        templateUrl: 'views/lugaresdeinteres.html',
        controller: 'LugaresdeinteresCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
