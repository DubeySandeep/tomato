tomato.controller('mainTab', ['$scope', 'GeoLocationService',
  function($scope, GeoLocationService) {
    $scope.currentLatitude = null;
    $scope.currentLongitude = 5;
    $scope.foundCurrentLocation = false;
    $scope.geoLocationErrorLog = null;

    $scope.getCurrentLocation = function() {
        GeoLocationService.getCurrentLocation(function(currentPosition) {
            $scope.foundCurrentLocation = true;
            $scope.currentLatitude = currentPosition.coords.latitude;
            $scope.currentLongitude = currentPosition.coords.longitude;
            $scope.$digest();
        }, function(errorLog) {
            $scope.foundCurrentLocation = false;
            $scope.geoLocationErrorLog = errorLog;
            $scope.$digest();
        })
    };
}]);
