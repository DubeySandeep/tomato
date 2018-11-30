tomato.controller('mainTab', ['$scope', 'GeoLocationService', 'ZomatoApiService',
  function($scope, GeoLocationService, ZomatoApiService) {
    $scope.currentLatitude = null;
    $scope.currentLongitude = null;
    $scope.foundCurrentLocation = false;
    $scope.geoLocationErrorLog = null;
    $scope.loadingData = false;
    $scope.locationData = null;

    $scope.getCurrentLocation = function() {
        $scope.loadingData = true;
        GeoLocationService.getCurrentLocation().then(function(currentPosition) {
            $scope.currentLatitude = currentPosition.coords.latitude;
            $scope.currentLongitude = currentPosition.coords.longitude;
            ZomatoApiService.getNearbyResturents(
                $scope.currentLatitude, $scope.currentLongitude
            ).then(function(data) {
                $scope.locationData = data.data;
                $scope.loadingData = false;
                // TODO: Use ng-animate or jQuery in future.
                var logo = document.getElementsByClassName('tomato-head-logo');
                logo[0].style.fontSize = '40px';
                $scope.foundCurrentLocation = true;

                console.log(data);
            }, function(error) {
                console.log(error);
            });
        }, function(errorLog) {
            $scope.loadingData = false;
            $scope.foundCurrentLocation = false;
            $scope.geoLocationErrorLog = errorLog;
        })
    };
}]);
