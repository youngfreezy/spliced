var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = require('chai').expect;

describe('homeController', function() {
  var $scope, $rootScope, $location, $window;

  $rootScope = $injector.get('$rootscope');
  $location = $injector.get('$location');
  $scope = $injector.get('$scope');
  $window = $rootScope.$new();


  var $controller = $injector.get('$controller');

  //creating a controller for testing.

  var createController = function() {
    return $controller('homeController', {
      $scope: $scope,
      $window: $window,
      $location: $location,
      Auth: Auth
    })
  };
  createController();

  it('should make a GET request to "/game" ', function() {
    $httpBackend.expectGET('"/game"');
    var controller = createController();
    $httpBackend.flush();
    expect($rootScope.data.submitted).to.be.ok;
  });
  it('should have a createGame method', function() {
    expect($scope.createGame).to.be.a('function');
  })
  it('should have a enterCode method', function() {
    expect($scope.enterCode).to.be.a('function');
  })
  it('should be called with a gameCode', function() {

    expect($scope.enterCode()).to.have.length(1);
  })

})
