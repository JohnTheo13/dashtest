var app = angular.module("MyApp", []);

app.directive("gridDirective",function(){
	return function(scope, element, attrs){
		var kids=element.children();
	}
});

app.controller("MainCtrl", function($scope, $http) {
  $http.get('https://api.myjson.com/bins/29ja6').
    success(function(data) {
      $scope.fdata = data;
    }).
    error(function(data) {
      // log error
    });
  

});