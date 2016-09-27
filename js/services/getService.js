app.factory('getData', ['$http', function($http) { 
  return   $http.get('https://api.myjson.com/bins/29ja6'). //retrives the data
    success(function(data) {
      var adata = angular.fromJson(data);
      var data=[];
      for (var i = 0; i< adata.images.length; i++) {
          data.push(adata.images[i]);
      }
      return data;
      // or depends what you need testArr[0] = data.images;
    }).
    error(function(data) {
      return err; // log error
    });
}]);

