var tomato = angular.module('tomato', []);

tomato.controller('mainTab', [
    '$scope', function($scope) {
  $scope.restaurants = [
    {
      name: 'FasoFood',
      description: 'Fast Food.'
    }, {
      name: 'Denzong kitchen',
      description: 'Chinese food.'
    }
  ];
}]);
