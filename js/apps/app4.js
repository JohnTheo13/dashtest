var app = angular.module("MyApp", ['infinite-scroll']);

app.controller("MainCtrl", ["$scope","getData", function($scope,getData) {
    getData.success(function(data) {
    $scope.fdata = data;
    $scope.adata=[];
      for (var i = 0; i< $scope.fdata.images.length/2; i++) {
          $scope.adata.push($scope.fdata.images[i]);
      }
    $scope.skata=$scope.adata.length;
    $scope.delete = function(index){
    $scope.adata.splice(index, 1);
    $scope.skata-=1;
    }



    $scope.count=10;
    $scope.add=function(){
      if($scope.count<60){
       for (var i = 40+$scope.count; i< 50+$scope.count; i++) {
          $scope.adata.push($scope.fdata.images[i]);
          }
          $scope.count+=10;
        }
    }
         
  });
}]);


