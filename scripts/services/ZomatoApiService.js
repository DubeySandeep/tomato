tomato.factory('ZomatoApiService', [
    '$http', '$q', 'ZOMATO_API_KEY', 'ZOMATO_API_URL_PREFIX',
    function($http, $q, ZOMATO_API_KEY, ZOMATO_API_URL_PREFIX) {
    var _getNearbyResturents = function(
      latitude, longitude, successCallback, errorCallback) {
        var payloads = {
            // TODO: There is some issue with ZOMATO API documentation, it's
            // 'user-key' in documentation instead of 'apikey'.
            // Needs to validate this again!
            apikey: ZOMATO_API_KEY,
            lat: latitude,
            lon: longitude
        };
        console.log(payloads);
        $http({
            method: 'GET',
            params: payloads,
            url: ZOMATO_API_URL_PREFIX + '/geocode'
        }).then(function(data) {
            successCallback(data);
        }, function(error) {
            errorCallback(error);
        });

    };

    return {
        getNearbyResturents: function (latitude, longitude) {
            return $q(function(resolve, reject){
                _getNearbyResturents(latitude, longitude, resolve, reject)
            });
        }
    };
}]);
