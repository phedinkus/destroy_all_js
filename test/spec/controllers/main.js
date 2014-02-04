'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('destroyAllJsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

describe('Directive Dropdown', function(){
  beforeEach(module('destroyAllJsApp'));

  var scope, elem, compiled;

  beforeEach(function(){
    inject(function($compile, $rootScope){
      scope = $rootScope;

      elem = angular.element('<magic-dropdown></magic-dropdown>');

      compiled = $compile(elem)(scope);

      scope.$digest();
    });
  });

  it('is closed by default', function(){
    expect(elem.hasClass('closed')).toBe(true);
  });

  it('opens when you click it', function(){
    elem.triggerHandler('click');
    expect(elem.hasClass('open')).toBe(true);
  });
});
