'use strict';

describe('Controller: MemoriagraficaCtrl', function () {

  // load the controller's module
  beforeEach(module('memoriaGraficaApp'));

  var MemoriagraficaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemoriagraficaCtrl = $controller('MemoriagraficaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
