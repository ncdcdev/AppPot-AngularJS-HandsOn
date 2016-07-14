angular.module("app")
.controller("LoginController",
        ["$scope", "$location", "AppPot", function($scope, $location, AppPot) {

	$scope.userName = "";
	$scope.password = "";

	$scope.login = function() {
		AppPot.LocalAuthenticator.login($scope.userName, $scope.password)
		.then(function(authInfo) {
            $location.path("/");
			$scope.$apply();
		})
		.catch(function(error) {
    		if (error.code && error.code == "111") {
    			$scope.alert = {msg: error.description};
				$scope.$apply();
    		}
    		else {
    			alert("システムエラー");
    		}
    	});
	};

}]);