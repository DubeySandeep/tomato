tomato.directive('restaurantsRatingChart', [function() {
    return {
      restrict: 'E',
      scope: {
        nearbyRestaurants: '='
      },
      templateUrl: 'templates/restaurants-rating-chart-directive.html',
      controller: ['$scope', function($scope) {
        $scope.figHeight = $scope.nearbyRestaurants.length*20 + 20;
        $scope.nearbyRestaurantsData = []
        for(index in $scope.nearbyRestaurants) {
          let restaurant = {};
          restaurant["rating"] = Number($scope.nearbyRestaurants[index].restaurant.user_rating.aggregate_rating) || 0;
          restaurant["name"] = $scope.nearbyRestaurants[index].restaurant.name || "No name.";
          restaurant["link"] = $scope.nearbyRestaurants[index].restaurant.book_url;
          $scope.nearbyRestaurantsData.push(restaurant);
        }
      }]
    };
  }]);
