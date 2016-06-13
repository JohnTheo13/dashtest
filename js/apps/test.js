var MainCtrl = function MainCtrl($scope) {
  $scope.type = 'Type1';
  $scope.types = [ 'Type1', 'Type2' ];
  $scope.layouts = {
    'Type1' : [ 'textarea', 'textarea' ],
    'Type2' : [ 'number', 'text' ]
  };

  $scope.toggleType = function() {
    if ($scope.type === 'Type1') {
      $scope.type = 'Type2';
    }
    else {
      $scope.type = 'Type1';
    }
  };
};

var ngApp = angular.module('App', []).directive('component', function() {
  var link = function(scope, element, attrs) {
    var render = function() {
      var t = scope.layouts[scope.type][attrs.index];
      if (t === 'textarea') {
        element.html('<' + t + ' /><br>');
      }
      else {
        element.html('<input type="' + t + '"><br>');
      }
    };
    //key point here to watch for changes of the type property
    scope.$watch('type', function(newValue, oldValue) {
      render();
    });

    render();
  };
  return {
    restrict : 'E',
    link : link
  }
});