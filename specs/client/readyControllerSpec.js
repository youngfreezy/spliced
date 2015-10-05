var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = require('chai').expect;

describe('readyController', function() {
  var $scope, $rootScope, $location, $window;

  $rootScope = $injector.get('$rootscope');
  $location = $injector.get('$location');
  $scope = $injector.get('$scope');
  $window = $rootScope.$new();


  var $controller = $injector.get('$controller');

//creating a controller for testing.

var createController = function(){
  return $controller('readyController', {
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



it('should have a getGameStatus function', function(){
  expect($scope.getGameStatus).to.be.a('function');
})

it('it should set the imageUrl to the repsonse data imageUrl', function(){
  $scope.getGameStatus()
  expect($scope.data.hasOwnProperty("imageURL")).to.be.true;
})

it('should have a registerPlayer function', function(){
  expect($scope.getGameStatus).to.be.a('function');
})
it('registerPlayer should register a player with the given game code', function(){
  expect($scope.registerPlayer()).to.have.length(1);
})

it('should have a gameCode property', function(){
  expect($scope.data.gameCode).to.have.length(4);
})

})
