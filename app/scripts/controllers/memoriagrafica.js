'use strict';

/**
 * @ngdoc function
 * @name memoriaGraficaApp.controller:MemoriagraficaCtrl
 * @description
 * # MemoriagraficaCtrl
 * Controller of the memoriaGraficaApp
 */
angular.module('memoriaGraficaApp')
  .controller('MemoriagraficaCtrl', function ($scope, pwPage) {

  		var id = 1020;
  		$scope.imagenes = [];
  		$scope.path = 'http://sityoo.com/site/assets/files/' + id + '/'

  		pwPage.getPage(id)    // deportes pobla
  		.then(function(response){
  			console.debug("deportes", response);
  			// var ids = response.imagenes.split('|');
  			$scope.imagenes.push(response.imagenes_memoria.split('|'));
  			console.debug("imagenes",$scope.imagenes);

  		});
  });
