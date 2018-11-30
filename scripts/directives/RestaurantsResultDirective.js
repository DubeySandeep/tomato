tomato.directive('restaurantsResult', [function(UrlInterpolationService) {
    return {
      restrict: 'E',
      scope: {
        locationData: '=',
        lat: '=',
        lon: '='
      },
      templateUrl: 'templates/restaurants-result-directive.html',
      controller: ['$scope', function($scope) {
        $scope.location = $scope.locationData.location.title;
        console.log($scope.location, $scope.locationData.location.title)
        $scope.nearbyRestaurants = $scope.locationData.nearby_restaurants;

      }]
    };
  }]);
