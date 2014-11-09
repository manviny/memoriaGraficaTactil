'use strict';

describe('Controller: LugaresdeinteresCtrl', function () {

  // load the controller's module
  beforeEach(module('memoriaGraficaApp'));

  var LugaresdeinteresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LugaresdeinteresCtrl = $controller('LugaresdeinteresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
