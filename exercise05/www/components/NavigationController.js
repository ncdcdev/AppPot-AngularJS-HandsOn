angular.module("app")
.controller("NavigationController", 
    ["$scope", "$location", "AppPot", function($scope, $location, AppPot) {
	
	$scope.logout = function() {
		AppPot.LocalAuthenticator.logout()
		.then(function() {
			$location.path("/login");
			$scope.$apply();
		});
	};
	
}]);