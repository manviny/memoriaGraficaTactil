'use strict';

describe('Controller: MemoriavideosCtrl', function () {

  // load the controller's module
  beforeEach(module('memoriaGraficaApp'));

  var MemoriavideosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemoriavideosCtrl = $controller('MemoriavideosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
