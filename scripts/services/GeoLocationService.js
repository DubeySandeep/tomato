tomato.factory('GeoLocationService', [function() {
    var _getCurrentLocation = function(successCallback, errorCallback) {
        var errorLog = '';
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            successCallback, function(error) {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorLog = "Please allow us to use check your current location!"
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorLog = "Unable to find your current location."
                        break;
                    case error.TIMEOUT:
                        errorLog = "The request to get your location taking too much time."
                        break;
                    case error.UNKNOWN_ERROR:
                        errorLog = "An unknown error occurred please retry!"
                        break;
                }
                errorCallback(errorLog);
            });
        } else {
            errorLog = "Geolocation is not supported by this browser.";
            errorCallback(errorLog)
        }
    }

    return {
        getCurrentLocation: function(successCallback, errorCallback) {
            return _getCurrentLocation(successCallback, errorCallback);
        }
    };
}]);
