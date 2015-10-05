var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = require('chai').expect;

describe('drawController', function() {
  var $httpBackend, $scope, $rootScope, $location, $window;

  $rootScope = $injector.get('$rootscope');
  $location = $injector.get('$location');
  $scope = $injector.get('$scope');
  $window = $rootScope.$new();

  var $httpBackend = $injector.get('$httpBackend');
  var $controller = $injector.get('$controller');

  //creating a controller for testing.

  var createController = function() {
    return $controller('drawController', {
      $scope: $scope,
      $window: $window,
      $location: $location,
      Auth: Auth
    })
  };
  createController();

  it('should make a POST request to "/game/" ', function() {
    $httpBackend.expectPOST('"/game/"');
    var controller = createController();
    $httpBackend.flush();
    expect($rootScope.data.submitted).to.be.true;
  });

  it('the $scope.data object should have a drawing property', function() {
    expect($scope.data.drawing).to.be.a('function');
  })

  it('the $scope.data object should have a drawing.version property that is a number one number long', function() {
    expect($scope.data.drawing.version).to.have.length(1);
  })

  it('should have an undo function', function() {
    expect($scope.undo).to.be.a('function');
  })

  it('the undo function should change the version number properly', function() {
    $scope.data.drawing.version = 1;
    $scope.undo();
    expect($scope.data.drawing.version).to.equal(0);
  })

  it('should have a submitted property which returns a boolean', function() {
    assert.isBoolean($scope.data.submitted);
  })

  it('the $scope.data.bodyPart object should have four properties for each body part', function() {
    expect(Object.keys($scope.data.bodyPart)).to.have.length(4);
  })

  it('should have a save function', function() {
    expect($scope.save).to.be.a('function');
  })

  it('the save function should set the submitted property to', function() {
    $scope.save();
    expect($scope.data.submitted).to.be.true;
  })



})
